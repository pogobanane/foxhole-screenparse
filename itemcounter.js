class ItemCounter {
  constructor(tmpCanvas, progressCallback = (progress)=>{}, currentTemplate = null, visualizationCanvas = null, domList = null) {
    this.tmpCanvas = tmpCanvas; // scratchpad canvas element (should be display: none)
    this.progress = new Progress(progressCallback);
    this.currentTemplate = currentTemplate; // template used for current matching
    this.visCanvas = visualizationCanvas; // visualization of detected items
    this.domList = domList; // list of debug info for items
    this.abort = false;
    this.faction = null; // 'colonial' or 'warden'
    this.screenshotImg = null;
  }

  setFaction(faction) {
    this.faction = faction;
  }

  // returns null on error
  async count(imageElem) {
    if (this.faction == null) {
      console.error('faction undefined');
      this.progress.error('Choose a faction');
      return null;
    }

    this.abort = false;
    this.screenshotImg = imageElem;

    let cal = await this._calibrate();
    if (cal == null) {
      console.warn("Width is null");
      return null;
    }
    console.warn('calibration ', cal);
    let findings = await this._countItems(cal.itemSizePx, cal.stockpileBox);
    return findings;
  }

  async _calibrate() {
    let image = cv.imread(this.screenshotImg);
    var screenshot = new cv.Mat();
    cv.cvtColor(image, screenshot, cv.COLOR_RGBA2GRAY, 0);
    image.delete();
    const coarse = 4;
    // 7 coarse searches
    let shirt1 = await this.calibrateFindMax(screenshot, 'Soldier Supplies', 25, 50, coarse);
    if (shirt1 === null) {
      screenshot.delete();
      return null;
    }
    let box = points2point(shirt1, screenshot);
    box.x = box.x - box.height;
    box.y = box.y - box.width;
    box.width = box.width * 15.0;
    box.height = box.height * 3.0;
    box = box2bounds(box, screenshot);
    let rect = new cv.Rect(
            box.x,
            box.y,
            box.width,
            box.height,
          );
    let croppedMat = screenshot.roi(rect);
    // 7 fine searches
    let shirt2 = await this.calibrateFindMax(croppedMat, 'Soldier Supplies', 
      shirt1.iconSizePx - coarse + 1, 
      shirt1.iconSizePx + coarse - 1, 
      1);
    if (shirt2 === null) {
      croppedMat.delete();
      screenshot.delete();
      return null;
    }
    // 7 searches
    let bsups = await this.calibrateFindMax(croppedMat, 'Bunker Supplies', 
      shirt2.iconSizePx - coarse + 1, 
      shirt2.iconSizePx + coarse - 1,
      1);
    if (bsups === null) {
      croppedMat.delete();
      screenshot.delete();
      return null;
    }
  
    let ydiff = 
      (bsups.y0 + bsups.y1) / 2.0 - 
      (shirt2.y0 + shirt2.y1) / 2.0;
    ydiff = Math.abs(ydiff);
    let xdiff = 
      (bsups.x0 + bsups.x1) / 2.0 - 
      (shirt2.x0 + shirt2.x1) / 2.0;
    if (ydiff > 1 || bsups.confidence < 0.9) {
      this.progress.error('Could not find stockpile on screenshot. (ydiff ' + ydiff + ', sconf ' + bsups.confidence.toFixed(2) + ')');
      croppedMat.delete();
      screenshot.delete();
      return null;
    }
    console.log(shirt2);
    console.log(bsups);
    console.log('distance px y ' + ydiff + ' x ' + xdiff);
    let itemSizePx = 32.0 / 196.0 * xdiff; // 32px at a=196 (1080p)
    console.log('calculated iconSizePx ' + itemSizePx);
    rect.x = Math.max(rect.x, 0);
    rect.y = Math.max(rect.y, 0);
    rect.height = screenshot.rows - rect.y; // till the bottom
    rect.width = Math.min(screenshot.cols - rect.x, rect.width);
    croppedMat.delete();
    screenshot.delete();
    return {
      'itemSizePx': Math.round(itemSizePx),
      'stockpileBox': rect,
    };
  }

  async calibrateFindMax(screenshot, itemName, from, to, step) {
    let maxC = 0.0;
    let maxPx = 0;
    let best = null;
    for (let iconSizePx = from; iconSizePx <= to; iconSizePx += step) {
      if (this.abort) {
        this.progress.error('Aborted');
        return null;
      }
      //console.log('testing px size ', iconSizePx);
      let current = await this.calibrateFind(screenshot, itemName, iconSizePx);
      if (current.confidence > maxC) {
        maxC = current.confidence;
        maxPx = iconSizePx;
        best = current;
      }
    }
    best['iconSizePx'] = maxPx;
    return best;
  }

  async calibrateFind(screenshotMat, itemName, iconSizePx) {
    //let item = items.find((item) => { return item.itemName == 'Soldier Supplies'; });
    let item = items.find((item) => { return item.itemName == itemName; });
    let message = "Searching " + item.itemName + " at " + iconSizePx + "px...";
    console.log(message);
    this.progress.step1('Calibration: ' + message);
    let icon = await loadImage(getImgPath(item.imgPath));
    let iconUnprocessedMat = cv.imread(icon);
    let iconMat = await prepareItem(iconUnprocessedMat, item, iconSizePx);
    iconUnprocessedMat.delete();
    if (this.currentTemplate !== null) {
      cv.imshow(this.currentTemplate, iconMat);
    }
    let matches = await imgmatch(screenshotMat, iconMat);
    let perfMatched = performance.now();
    let best = matches[0];
    console.info("Confidence: " + best.confidence);
  
    //await drawRect(debugShot, best.x0, best.y0, best.x1, best.y1);
    //cv.imshow('canvasImgmatch', debugShot);
    return best;
  }

  // expects the stockpileBox to already been drawn into the canvasImgmatch
  async _countItems(iconSizePx, stockpileBox) {
    let tesseract = new OCR();
    await tesseract.init();
    let found = [];
    let image = cv.imread(this.screenshotImg);
    var screenshot = new cv.Mat();
    cv.cvtColor(image, screenshot, cv.COLOR_RGBA2GRAY, 0);
    image.delete();
    let rect = new cv.Rect(
            stockpileBox.x, 
            stockpileBox.y, 
            stockpileBox.width,
            stockpileBox.height,
          );
    console.log(rect);
    let stockpileMat = screenshot.roi(rect);
    console.log('rectified');
    if (this.visCanvas !== null) {
      cv.imshow(this.visCanvas, stockpileMat);
    }
    screenshot.delete();
  	
    let i = 0;
    for (let item of items) {
      //item = items[0];
      if (this.abort) {
        this.progress.error('Aborted');
        stockpileMat.delete();
        return null;
      }
      i++;
      this.progress.step2('Searching ' + item.itemName);

      if (typeof item.imgPath === 'undefined') {
        continue;
      }
      if (!item.faction.includes(this.faction)) {
        continue;
      }
  
      let perfStart = performance.now();
      console.log("Searching " + item.itemName + "...");
      let icon = await loadImage(getImgPath(item.imgPath));
      let iconUnprocessedMat = cv.imread(icon);
      let iconMat = await prepareItem(iconUnprocessedMat, item, iconSizePx);
      iconUnprocessedMat.delete();
      if (this.currentTemplate !== null) {
        cv.imshow(this.currentTemplate, iconMat);
      }
      let matches = await imgmatch(stockpileMat, iconMat);
      let perfMatched = performance.now();
      let best = matches[0];
      console.info("Confidence: " + best.confidence);
      const box = points2point(best);
      let rect = new cv.Rect(
              box.x, 
              box.y, 
              box.width,
              box.height
            );
      let matchedMat = stockpileMat.roi(rect);
      if (!confidentEnough(best.confidence, item)) {
        console.info("Matching: " + (perfMatched - perfStart) + "ms");
        this._domListAppend(item, best.confidence, iconMat, matchedMat);
        found.push({ "name": item.itemName, "count": 0 });
        continue;
      }
  
      const countPoints = itemCountPos(box.x, box.y, iconSizePx);
      if (this.visCanvas !== null) {
        let debugShot = cv.imread(this.visCanvas);
        await drawRect(debugShot, best.x0, best.y0, best.x1, best.y1);
        await drawRect(debugShot, countPoints.x0, countPoints.y0, countPoints.x1, countPoints.y1);
        cv.imshow(this.visCanvas, debugShot);
        debugShot.delete();
      }
  
      const countBox = points2point(countPoints);
      rect = new cv.Rect(
              countBox.x, 
              countBox.y, 
              countBox.width,
              countBox.height
            );
      let countSmallMat = stockpileMat.roi(rect);
      let countMat = new cv.Mat();
      let dsize = new cv.Size(countBox.width*4.0, countBox.height*4.0);
      cv.resize(countSmallMat, countMat, dsize, 0, 0, cv.INTER_CUBIC);
      countSmallMat.delete();
      let itemCount = await tesseract.itemCount(this._mat2canvas(countMat), countPoints);
      console.log(item.itemName + ": " + itemCount);
      found.push({ "name": item.itemName, "count": itemCount });
      let perfOCRed = performance.now();
      console.info("Matching: " + (perfMatched - perfStart) + "ms, OCR: " + (perfOCRed - perfMatched) + "ms");
      this._domListAppend(item, best.confidence, iconMat, matchedMat, countMat, itemCount);
      iconMat.delete(); countMat.delete(); matchedMat.delete();
      //break;
    }
  
    stockpileMat.delete();
    console.info(found);
    return found;
  };

  async _domListAppend(item, confidence, iconRendered, iconFound, countFound, countRead) {
    if (this.domList === null) {
      return;
    }
    let li = document.createElement("li");
    li.setAttribute("style", "position: inline-block;");
  
    let canvas = document.createElement("canvas");
    cv.imshow(canvas, iconRendered);
    li.appendChild(canvas);
  
    if (typeof iconFound !== 'undefined') {
      canvas = document.createElement("canvas");
      cv.imshow(canvas, iconFound);
      li.appendChild(canvas);
    }
  
    if (typeof countFound !== 'undefined') {
      canvas = document.createElement("canvas");
      cv.imshow(canvas, countFound);
      li.appendChild(canvas);
    }
  
    if (typeof countRead !== 'undefined') {
      let text = document.createTextNode(" " + countRead + " crates - ");
      li.appendChild(text);
    } else {
      let text = document.createTextNode(" no crates - ");
      li.appendChild(text);
    }
  
    let text = document.createTextNode(item.itemName);
    li.appendChild(text);
    
    if (typeof confidence !== 'undefined') {
      let text = document.createTextNode(" (" + confidence.toFixed(2) + ")");
      li.appendChild(text);
    }
  
    this.domList.appendChild(li);
  }

  // returns dom object of canvas
  _mat2canvas(mat) {
    cv.imshow(this.tmpCanvas, mat);
    return this.tmpCanvas;
  }
  
  // returns dom object of canvas
  _img2canvas(img) {
    let canvas = this.tmpCanvas;
    let ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return canvas;
  }
}

class Progress {
  constructor(progressCallback) {
    this.callback = progressCallback; // (progress) => {}: inform other component about progress
    this._progress = 0;
    this._total = 0;
    this.percent = 0.0;
    this.step = 0; // 0 = not even started
    this.steps = 2;
    this.description = '';
    this.error = null; 
  }

  _callback() {
    this.percent = 1.0 * this._progress / this._total;
    this.callback({
      'percent': this.percent,
      'step': this.step,
      'steps': this.steps,
      'description': this.description,
      'error': this.error,
    });
  }

  error(message) {
    this.error = message;
    this._callback();
  }

  // advance percentage by one step
  step1(description) {
    if (this.step !== 1) {
      this.step = 1;
      this._progress = 0;
      this._total = 7 + 7 + 7;
    }
    this._progress++;
    this.description = description;
    this._callback();
  }

  step2(description) {
    if (this.step !== 2) {
      this.step = 2;
      this._progress = 0;
      this._total = items.length;
    }
    this._progress++;
    this.description = description;
    this._callback();
  }
}

const confidentEnough = (confidence, item) => {
  if (item.itemName == 'Sampo Auto-Rifle 77') {
    console.log('foo');
  }
  if (['Rifle', 'Long Rifle'].includes(item.itemClass)) {
    return confidence > 0.95;
  } else {
    return confidence > 0.9;
  }
}

const getImgPath = (imgPath) => {
  if (imgPath.startsWith('http')) {
    return imgPath;
  } else {
    return 'https://raw.githubusercontent.com/foxholetools/assets/master/dist/' + imgPath;
  }
}

// return new mat
const addCrate = async (scaledItemMat, itemSizePx) => {
  let icon = await loadImage(getImgPath('icons/menus/filtercrates.png'));
  let step1 = cv.imread(icon);
  let ret = await addExtraDecor(scaledItemMat, step1, 'botright', itemSizePx);
  step1.delete();
  return ret;
}

// return new mat
const addExtraIcon = async (scaledItemMat, item, itemSizePx) => {
  if (typeof item.extraIcon === 'undefined') {
    return scaledItemMat.clone();
  }
  let imgPath = extra_icons[item.extraIcon].imgPath;
  let icon = await loadImage(getImgPath(imgPath));
  let step1 = cv.imread(icon);
  let ret = await addExtraDecor(scaledItemMat, step1, 'topleft', itemSizePx);
  step1.delete();
  return ret;
}

// return new mat with added crate
const addExtraDecor = async (scaledItemMat, decorMat, position, itemSizePx) => {
  let step2 = new cv.Mat();
  let step3 = new cv.Mat();
  let step4 = new cv.Mat();
  let step5 = new cv.Mat();
  let emptyMask = new cv.Mat();
  // @ itemSizePx=32
  // scale to 14x14px
  const length = Math.round(14.0 / 32.0 * itemSizePx);
  let dsize = new cv.Size(length, length);
  cv.resize(decorMat, step3, dsize, 0, 0, cv.INTER_AREA);
  // px away from bottom and 1 from right
  let fillerColor = new cv.Scalar(0, 0, 0, 0);

  let padTop;
  let padLeft;
  let padBot;
  let padRight;
  if (position == 'topleft') {
    padTop = 0;
    padLeft = 0;
    padBot = itemSizePx - length;
    padRight = itemSizePx - length;
  } else if (position == 'botright') {
    padBot = Math.round(0.0 / 32.0 * itemSizePx);;
    padRight = Math.round(0.0 / 32.0 * itemSizePx);;
    padTop = itemSizePx - padBot - length;
    padLeft = itemSizePx - padRight - length;
  }
  cv.copyMakeBorder(step3, step4, 
    padTop, padBot, padLeft, padRight, 
    cv.BORDER_CONSTANT, fillerColor);
  
  // opacity 50%
  // apply : (0.5a)F + (1-0.5a)B
  let planes = new cv.MatVector();
  cv.split(step4, planes);
  // norm alpha to 0<a<1 (=> 1/256) and apply 50% opacity
  let alphaMask = new cv.Mat();
  let alphaMaskInv = new cv.Mat();
  let maxVal = new cv.Mat();
  planes.get(0).convertTo(maxVal, -1, 0, 255);
  let oneVal = new cv.Mat();
  maxVal.convertTo(oneVal, cv.CV_32F, 0, 1);
  planes.get(3).convertTo(alphaMask, cv.CV_32F, 1.0 / 256.0, 0);
  cv.subtract(oneVal, alphaMask, alphaMaskInv, new cv.Mat(), -1);
  let background1 = new cv.Mat();
  let background2 = new cv.Mat();
  let background3 = new cv.Mat();
  let background4 = new cv.Mat();
  cv.multiply(scaledItemMat, alphaMaskInv, background1, 1.0, scaledItemMat.type());
  
  // apply alpha mask to each color and add it with factor 1/3 to background
  cv.multiply(planes.get(0), alphaMask, step5, 1.0/3.0, planes.get(0).type());
  cv.add(background1, step5, background2, emptyMask, background1.type());
  cv.multiply(planes.get(1), alphaMask, step5, 1.0/3.0, planes.get(0).type());
  cv.add(background2, step5, background3, emptyMask, background1.type());
  cv.multiply(planes.get(2), alphaMask, step5, 1.0/3.0, planes.get(0).type());
  cv.add(background3, step5, background4, emptyMask, background1.type());

  step2.delete(); step3.delete(); step4.delete(); step5.delete(); emptyMask.delete();
  planes.delete(); alphaMask.delete(); alphaMaskInv.delete(); maxVal.delete(); 
  oneVal.delete(); 
  background1.delete(); background2.delete(); background3.delete();

  return background4;
}

// returns mat of processed item
const prepareItem = async (inMat, item, itemSizePx) => {
  let step = new cv.Mat();
  let dst = new cv.Mat();
  let rgbaPlanes = new cv.MatVector();
  cv.split(inMat, rgbaPlanes);
  let step2 = new cv.Mat();
  let nilVal = new cv.Mat();
  rgbaPlanes.get(0).convertTo(nilVal, -1, 0, 0);
  let maxVal = new cv.Mat();
  nilVal.convertTo(maxVal, -1, 1, 255);
  let alphaMask = new cv.Mat();
  let mask = new cv.Mat();
  let gray = new cv.Mat();
  //cv.subtract(rgbaPlanes.get(0), rgbaPlanes.get(0), step2, mask);
  //cv.add(step2, step3, 254);
  rgbaPlanes.get(3).convertTo(alphaMask, cv.CV_32F, 1.0/256.0, 0);
  // bake alpha into R
  cv.multiply(rgbaPlanes.get(0), alphaMask, step2, 1.0, rgbaPlanes.get(0).type());
  rgbaPlanes.set(0, step2);
  // bake alpha into G
  cv.multiply(rgbaPlanes.get(1), alphaMask, step2, 1.0, rgbaPlanes.get(0).type());
  rgbaPlanes.set(1, step2);
  // bake alpha into B
  cv.multiply(rgbaPlanes.get(2), alphaMask, step2, 1.0, rgbaPlanes.get(0).type());
  rgbaPlanes.set(2, step2);
  // set transparency to 255 (none)
  rgbaPlanes.set(3, maxVal);
  // merge planes
  cv.merge(rgbaPlanes, step);
  cv.cvtColor(step, gray, cv.COLOR_RGBA2GRAY, 0); 
  let dsize = new cv.Size(itemSizePx, itemSizePx);
  // You can try more different parameters
  cv.resize(gray, dst, dsize, 0, 0, cv.INTER_AREA);
  let crated = await addCrate(dst, itemSizePx);
  let extraIconed = await addExtraIcon(crated, item, itemSizePx);
  step.delete(); dst.delete(); rgbaPlanes.delete(); step2.delete(); nilVal.delete(); 
  maxVal.delete(); 
  alphaMask.delete(); 
  mask.delete(); 
  gray.delete(); 
  crated.delete();
  return extraIconed;
}

const imgmatch = async (haystackMat, needleMat) => {
  let dst = new cv.Mat();
  let mask = new cv.Mat();
  let foo = new cv.Mat();
  cv.matchTemplate(haystackMat, needleMat, dst, cv.TM_CCOEFF_NORMED, mask);
  let best = null;
  let matches = [];
  for (let i = 0; i <= 20; i++){
    let result = cv.minMaxLoc(dst, mask);
    let maxPoint = result.maxLoc;
    cv.floodFill(dst, foo, maxPoint, new cv.Scalar());
    let color = new cv.Scalar(255 - i * 10, 0, 0, 255);
    let point = new cv.Point(maxPoint.x + needleMat.cols, maxPoint.y + needleMat.rows);
    //cv.rectangle(haystackMat, maxPoint, point, color, 1, cv.LINE_8, 0);
    matches.push({
      "confidence": result.maxVal,
      "x0": maxPoint.x,
      "y0": maxPoint.y,
      "x1": maxPoint.x + needleMat.cols,
      "y1": maxPoint.y + needleMat.rows
    });
  }
  dst.delete(); mask.delete(); foo.delete(); 
  return matches;
}

const points2point = (points) => {
  const x0 = Math.min(points.x0, points.x1);
  const x1 = Math.max(points.x0, points.x1);
  const y0 = Math.min(points.y0, points.y1);
  const y1 = Math.max(points.y0, points.y1);
  const width = Math.abs(x1 - x0);
  const height = Math.abs(y1 - y0);
  return { x: x0, y: y0, width: width, height: height };
}

const box2bounds = (box, sourceMat) => {
  let x0 = Math.max(box.x, 0);
  let y0 = Math.max(box.y, 0);
  let width = Math.min(box.width, sourceMat.cols - x0);
  let height = Math.min(box.height, sourceMat.rows - y0);
  return { x: x0, y: y0, width: width, height: height };
}

// expects coords of corner with smallest coords (as from points2point)
const itemCountPos = (_x0, _y0, iconSizePx) => {
  const x0 = _x0 + 1.4 * iconSizePx;
  const y0 = _y0;
  const x1 = x0 + 1.3 * iconSizePx;
  const y1 = y0 + iconSizePx;
  return { x0: x0, y0: y0, x1: x1, y1: y1 };
}

// returns nothing. Works inplace. 
const drawRect = async (matIn, x0, y0, x1, y1) => {
  let color = new cv.Scalar(0, 255, 0, 255);
  let point = new cv.Point(x0, y0);
  let size = new cv.Point(x1, y1);
  cv.rectangle(matIn, point, size, color, 1, cv.LINE_8, 0);
}
