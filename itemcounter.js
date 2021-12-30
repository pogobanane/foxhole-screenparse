class ItemCounter {
  constructor(tmpCanvas, progressCallback = (progress)=>{}, currentTemplate = null, visualizationCanvas = null, domList = null) {
    this.tmpCanvas = tmpCanvas; // scratchpad canvas element (should be display: none)
    this.progressCallback = progressCallback; // TODO ({percent, step, steps, description, error}) => {}
    this.currentTemplate = currentTemplate; // template used for current matching
    this.visCanvas = visualizationCanvas; // visualization of detected items
    this.domList = domList; // list of debug info for items
    this.abort = false;
    this.faction = null; // 'colonial' or 'warden'
    this.screenshotImg = null;
  }

  abort() {
    this.abort = true;
  }

  setFaction(faction) {
    this.faction = faction;
  }

  async count(imageElem) {
    if (this.faction == null) {
      console.error('faction undefined');
      this.progressCallback({'error': 'Choose a faction'});
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
    let bsups = await this.calibrateFindMax(croppedMat, 'Bunker Supplies', 
      shirt2.iconSizePx - coarse + 1, 
      shirt2.iconSizePx + coarse - 1,
      1);
  
    let ydiff = 
      (bsups.y0 + bsups.y1) / 2.0 - 
      (shirt2.y0 + shirt2.y1) / 2.0;
    ydiff = Math.abs(ydiff);
    let xdiff = 
      (bsups.x0 + bsups.x1) / 2.0 - 
      (shirt2.x0 + shirt2.x1) / 2.0;
    if (ydiff > 1 || bsups.confidence < 0.9) {
      this.progressCallback({'error': 'Could not find stockpile on screenshot. (ydiff ' + ydiff + ', sconf ' + bsups.confidence.toFixed(2) + ')'});
      this
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
    this.progressCallback({'description': 'Calibration: ' + message});
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
  	
    for (let item of items) {
      //item = items[0];
      if (typeof item.imgPath === 'undefined') {
        continue;
      }
      if (!item.faction.includes(this.faction)) {
        continue;
      }
  
      let perfStart = performance.now();
      console.log("Searching " + item.itemName + "...");
      this.progressCallback({'description': 'Searching ' + item.itemName});
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
      let itemCount = await tesseract.itemCount(mat2canvas(countMat), countPoints);
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
}
