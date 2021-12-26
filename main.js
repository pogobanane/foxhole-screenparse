var prepareItemCache = {};

const addCrate = async (scaledItemMat, itemSizePx) => {
  let icon = await loadImage(getImgPath('icons/menus/filtercrates.png'));
  let step1 = cv.imread(icon);
  return addExtraDecor(scaledItemMat, step1, 'botright', itemSizePx);
}

const addExtraIcon = async (scaledItemMat, item, itemSizePx) => {
  if (typeof item.extraIcon === 'undefined') {
    return scaledItemMat;
  }
  let imgPath = extra_icons[item.extraIcon].imgPath;
  let icon = await loadImage(getImgPath(imgPath));
  let step1 = cv.imread(icon);
  return addExtraDecor(scaledItemMat, step1, 'topleft', itemSizePx);
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
  return background4;
}

// TODO bake in: demage type icons / uniform purpose
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
  step.delete(); mask.delete();
  return extraIconed;
}

const imgmatch = async (haystackMat, needleMat) => {
  let dst = new cv.Mat();
  let mask = new cv.Mat();
  let foo = new cv.Mat();
  let buffer = cv.matchTemplate(haystackMat, needleMat, dst, cv.TM_CCOEFF_NORMED, mask);
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
  dst.delete(); mask.delete();
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

// TODO upscale
// 4 is often misinterpreted as 11. It thinks that there are two overlapping 1s.
// Use symbols instead and if some overlap, let only the most confident one win.
const ocrItemCount = async (domElem, points) => {
  const worker = Tesseract.createWorker({
    logger: m => console.debug(m)
  });

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const params = {
    //'tessedit_ocr_engine_mode': 0,
    //'tessedit_pageseg_mode': 8,
    'tessedit_ocr_engine_mode': Tesseract.OEM.TESSERACT_ONLY,
    'tessedit_pageseg_mode': Tesseract.PSM.SINGLE_WORD,
    'tessedit_char_whitelist': '0123456789',
    // 'tessjs_create_osd': '1'
    //'tessjs_create_tsv': '1'
  };
  await worker.setParameters(params);
  const options = { rectangle: { 
          top: points.x0, 
          left: points.y0, 
          width: Math.abs(points.x1 - points.x0), 
          height: Math.abs(points.y1 - points.y0)
  }};
  const result = await worker.recognize(domElem); //, options);
  console.debug(result);
  console.debug(result.data.text);

  const itemCount = parseInt(result.data.text);

  return itemCount;
  
}

// works: tesseract --oem 0 --psm 11 -l "eng" fhq-seaport-curve1.png cmd -c tessedit_write_images=T
// returns: width an item icon should have in pixels
const ocr = async (domCanvas) => {
  const worker = Tesseract.createWorker({
    logger: m => console.debug(m)
  });

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const params = {
    //'tessedit_ocr_engine_mode': 0,
    //'tessedit_pageseg_mode': 11,
    'tessedit_ocr_engine_mode': Tesseract.OEM.TESSERACT_ONLY,
    'tessedit_pageseg_mode': Tesseract.PSM.SPARSE_TEXT,
    //'tessedit_char_whitelist': 'Seaport',
    // 'tessjs_create_osd': '1'
    //'tessjs_create_tsv': '1'
  };
  await worker.setParameters(params);
  const result = await worker.recognize(domCanvas);
  console.debug(result);
  console.debug(result.data.text);

  const seaportIdx = result.data.words.findIndex((word) => {
    return word.text == "Seaport";
  });
  const word = result.data.words[seaportIdx];
  const width = seaport2Icon(word.bbox.x1 - word.bbox.x0);

  //const markWord = (word) => {
  //  console.log(word);
  //  console.log("icon width should be ", seaport2Icon(word.bbox.x1 - word.bbox.x0));
  //  drawRect(domCanvas, word.bbox.x0, word.bbox.y0, word.bbox.x1, word.bbox.y1);
  //}
  //markWord(result.data.words[seaportIdx]);
  //markWord(result.data.words[seaportIdx+1]);
  //markWord(result.data.words[seaportIdx+2]);
  //markWord(result.data.words[seaportIdx+3]);
  //markWord(result.data.words[seaportIdx+4]);
  //markWord(result.data.words[seaportIdx+5]);
  //markWord(result.data.words[seaportIdx+6]);
  await worker.terminate();

  return width;
}

// https://stackoverflow.com/questions/26941168/javascript-interpolate-an-array-of-numbers
const interpolateArray = (data, fitCount) => {
  var linearInterpolate = function (before, after, atPoint) {
    return before + (after - before) * atPoint;
  };

  var newData = new Array();
  var springFactor = new Number((data.length - 1) / (fitCount - 1));
  newData[0] = data[0]; // for new allocation
  for ( var i = 1; i < fitCount - 1; i++) {
    var tmp = i * springFactor;
    var before = new Number(Math.floor(tmp)).toFixed();
    var after = new Number(Math.ceil(tmp)).toFixed();
    var atPoint = tmp - before;
    newData[i] = linearInterpolate(data[before], data[after], atPoint);
  }
  newData[fitCount - 1] = data[data.length - 1]; // for new allocation
  return newData;
}

// returns: matOut
const postprocessSeaport = async (matIn) => {
  let step = new cv.Mat();
  let step2 = new cv.Mat();
  cv.cvtColor(matIn, step, cv.COLOR_RGBA2GRAY, 0);
  //let lut = [];
  //lut += interpolateArray([0, 0], 256/2);
  //lut += interpolateArray([0, 7*(256/8)], 7*(256/8));
  //lut += interpolateArray([7*(256/8), 255], 1*(256/8));
  //console.log(lut);
  //cv.LUT(src, lut, dst);
  cv.threshold(step, step2, 0.75*256, 255, cv.THRESH_BINARY);
  //cv.threshold(step, dst, 0.65*256, 0, cv.THRESH_TOZERO);
  cv.bitwise_not(step2, step);
  step2.delete();
  return step;
}

// pixel on fhd
const seaport2Icon = (width) => {
  // icon.width / seaport.width = x / width
  const f = 32.0 * width / 51.0;
  return Math.round(f);
}

// taken from https://stackoverflow.com/questions/37854355/wait-for-image-loading-to-complete-in-javascript
const loadImage = async function(imageUrl) {
    let img;
    const imageLoadPromise = new Promise(resolve => {
        img = new Image();
        img.onload = resolve;
	img.crossOrigin = "anonymous"; // without this opencv imread throws "this operation is unsecure"
        img.src = imageUrl;
    });

    await imageLoadPromise;
    return img;
}

// Borrowed from docs.opencv.org sources
const loadImageToCanvas = async function(url, domCanvas) {
  let ctx = domCanvas.getContext('2d');
  let img = await loadImage(url);
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
};

const getImgPath = (imgPath) => {
  if (imgPath.startsWith('http')) {
    return imgPath;
  } else {
    return 'https://assets.foxhole.tools/' + imgPath;
  }
}

const countItems = async (iconSizePx) => {
  let found = [];
  let image = cv.imread('imageSrc');
  var screenshot = new cv.Mat();
  cv.cvtColor(image, screenshot, cv.COLOR_RGBA2GRAY, 0);
  // TODO quartering the search canvas quarters the matching time.
  //let image = cv.imread('imageSrc');
  //let origScreenshot = new cv.Mat();
  //cv.cvtColor(image, origScreenshot, cv.COLOR_RGBA2GRAY, 0);
  //let rect = new cv.Rect(
  //        720, 
  //        0, 
  //        403,
  //        1080 
  //      );
  //var screenshot = origScreenshot.roi(rect);
  // TODO try reverse lookup: align at SS, GS, BS; get fist item icon and search in icon db
  // filter items by faction to reduce amount of similar looking items
	
  for (let item of items) {
    //item = items[188];
    if (typeof item.imgPath === 'undefined') {
      continue;
    }
    let perfStart = performance.now();
    console.log("Searching " + item.itemName + "...");
    let icon = await loadImage(getImgPath(item.imgPath));
    let iconUnprocessedMat = cv.imread(icon);
    let iconMat = await prepareItem(iconUnprocessedMat, item, iconSizePx);
    cv.imshow('canvasItem', iconMat);
    let matches = await imgmatch(screenshot, iconMat);
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
    let matchedMat = screenshot.roi(rect);
    if (best.confidence < 0.9) {
      console.info("Matching: " + (perfMatched - perfStart) + "ms");
      domListAppend(item, best.confidence, iconMat, matchedMat);
      continue;
    }

    const countPoints = itemCountPos(box.x, box.y, iconSizePx);
    let debugShot = cv.imread('imageSrc');
    drawRect(debugShot, best.x0, best.y0, best.x1, best.y1);
    drawRect(debugShot, countPoints.x0, countPoints.y0, countPoints.x1, countPoints.y1);
    cv.imshow('canvasImgmatch', debugShot);

    const countBox = points2point(countPoints);
    rect = new cv.Rect(
            countBox.x, 
            countBox.y, 
            countBox.width,
            countBox.height
          );
    let countSmallMat = screenshot.roi(rect);
    let countMat = new cv.Mat();
    let dsize = new cv.Size(countBox.width*4.0, countBox.height*4.0);
    cv.resize(countSmallMat, countMat, dsize, 0, 0, cv.INTER_AREA);
    //let itemCount = await ocrItemCount('imageSrc', countPoints);
    let itemCount = await ocrItemCount(mat2canvas(countMat), countPoints);
    console.log(item.itemName + ": " + itemCount);
    found.push({ "name": item.itemName, "count": itemCount });
    let perfOCRed = performance.now();
    console.info("Matching: " + (perfMatched - perfStart) + "ms, OCR: " + (perfOCRed - perfMatched) + "ms");
    domListAppend(item, best.confidence, iconMat, matchedMat, countMat, itemCount);
  }

  console.info(found);
};

// returns dom object of canvas
const mat2canvas = (mat) => {
  cv.imshow('canvasTmp', mat);
  return document.getElementById('canvasTmp');
}

// returns dom object of canvas
const img2canvas = (img) => {
  let canvas = document.getElementById('canvasTmp');
  let ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
  return canvas;
}

const domListAppend = async (item, confidence, iconRendered, iconFound, countFound, countRead) => {
  let list = document.getElementById("itemlist");
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
    text = document.createTextNode(" " + countRead + " crates - ");
    li.appendChild(text);
  } else {
    text = document.createTextNode(" no crates - ");
    li.appendChild(text);
  }

  text = document.createTextNode(item.itemName);
  li.appendChild(text);
  
  if (typeof confidence !== 'undefined') {
    text = document.createTextNode(" (" + confidence.toFixed(2) + ")");
    li.appendChild(text);
  }

  list.appendChild(li);
}

const run = async () => {
  console.log("run");
  var width = 0;
  if (false) {
    let src = cv.imread('imageSrc');
    let canvasOCRMat = await postprocessSeaport(src);
    await drawRect(canvasOCRMat, 90, 90, 100, 100);
    let perfStart = performance.now();
    width = await ocr(mat2canvas(canvasOCRMat));
    let perfOCRed = performance.now();
    console.info("Seaport OCR: " + (perfOCRed - perfStart) + "ms");
  } else {
    width = 32;
  }
  console.warn('run: width ', width);
  //prepareItem('imageTempl', 'canvasItem', width);
  //imgmatch('imageSrc', 'canvasItem', 'canvasImgmatch', width);
  await countItems(width);
}
