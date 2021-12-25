// TODO bake in: menus/filtercrates.png
// returns mat of processed item
const prepareItem = (inMat, itemSizePx) => {
  let step = new cv.Mat();
  let dst = new cv.Mat();
  let rgbaPlanes = new cv.MatVector();
  cv.split(inMat, rgbaPlanes);
  console.warn(rgbaPlanes);
  let step2 = new cv.Mat();
  let nilVal = new cv.Mat();
  rgbaPlanes.get(0).convertTo(nilVal, -1, 0, 0);
  let maxVal = new cv.Mat();
  nilVal.convertTo(maxVal, -1, 1, 255);
  let alphaMask = new cv.Mat();
  let mask = new cv.Mat();
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
  //cv.cvtColor(src, step, cv.COLOR_RGBA2GRAY, 0); 
  let dsize = new cv.Size(itemSizePx, itemSizePx);
  // You can try more different parameters
  cv.resize(step, dst, dsize, 0, 0, cv.INTER_AREA);
  step.delete(); mask.delete();
  console.info("item shrinked");
  return dst;
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
    cv.rectangle(haystackMat, maxPoint, point, color, 1, cv.LINE_8, 0);
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

const itemCountPos = (_x0, _y0, iconSizePx) => {
  const x0 = _x0 + 0.4 * iconSizePx;
  const y0 = _y0;
  const x1 = _x0 + 1.7 * iconSizePx;
  const y1 = _y0 - iconSizePx;
  return { x0: x0, y0: y0, x1: x1, y1: y1 };
}

// returns nothing. Works inplace. 
const drawRect = async (matIn, x0, y0, x1, y1) => {
  let color = new cv.Scalar(0, 255, 0, 255);
  let point = new cv.Point(x0, y0);
  let size = new cv.Point(x1, y1);
  cv.rectangle(matIn, point, size, color, 1, cv.LINE_8, 0);
}

// 4 is often misinterpreted as 11. It thinks that there are two overlapping 1s.
// Use symbols instead and if some overlap, let only the most confident one win.
const ocrItemCount = async (domidIn, points) => {
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
  let imgElement = document.getElementById(domidIn);
  //let imgElement = document.getElementById('imageSrc');
  const options = { rectangle: { 
          top: points.x0, 
          left: points.y0, 
          width: Math.abs(points.x1 - points.x0), 
          height: Math.abs(points.y1 - points.y0)
  }};
  console.log(options);
  const result = await worker.recognize(imgElement, options);
  console.log(result);
  console.log(result.data.text);

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

const countItems = async (iconSizePx) => {
  for (const item of items) {
    if (typeof item.imgPath === 'undefined') {
      continue;
    }
    let icon = await loadImage('https://assets.foxhole.tools/' + item.imgPath);
    //let canvas = img2canvas(icon);
    let iconUnprocessedMat = cv.imread(icon);
    let iconMat = await prepareItem(iconUnprocessedMat, iconSizePx);
    let screenshot = cv.imread('imageSrc');
    let matches = await imgmatch(screenshot, iconMat);
    let best = matches[0];
    if (best.confidence < 0.8) {
      continue;
    }
    const box = points2point(best);
    const countPoints = itemCountPos(box.x, box.y, iconSizePx);
    //drawRect(domidCanvasOut, box.x0, box.y0, box.x1, box.y1);
    const countBox = points2point(countPoints);
    let rect = new cv.Rect(
            countBox.x, 
            countBox.y, 
            countBox.width,
            countBox.height
          );
    let countMat = screenshot.roi(rect);
    let itemCount = await ocrItemCount('imageSrc', countPoints);
    window.alert(item.itemName + ": " + itemCount);
  }
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

const run = async () => {
  console.log("run");
  let src = cv.imread('imageSrc');
  let canvasOCRMat = await postprocessSeaport(src);
  await drawRect(canvasOCRMat, 90, 90, 100, 100);
  //const width = await ocr(mat2canvas(canvasOCRMat));
  const width = 32;
  console.warn('run: width ', width);
  //prepareItem('imageTempl', 'canvasItem', width);
  //imgmatch('imageSrc', 'canvasItem', 'canvasImgmatch', width);
  await countItems(width);
}
