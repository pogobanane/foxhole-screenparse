let evil_counter = 0;

// TODO bake in: menus/filtercrates.png
const prepareItem = (domidIn, domidCanvasOut, itemSizePx) => {
  let src = cv.imread(domidIn);
  let step = new cv.Mat();
  let dst = new cv.Mat();
  let rgbaPlanes = new cv.MatVector();
  cv.split(src, rgbaPlanes);
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
  cv.imshow(domidCanvasOut, dst);
  src.delete(); dst.delete(); step.delete(); mask.delete();
  console.info("item shrinked");
}

const imgmatch = async (domidHaystack, domidNeedle, domidCanvasOut, iconSizePx) => {
  let src = cv.imread(domidHaystack);
  let templ = cv.imread(domidNeedle);
  let dst = new cv.Mat();
  let mask = new cv.Mat();
  let foo = new cv.Mat();
  let buffer = cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF_NORMED, mask);
  let best = null;
  for (let i = 0; i <= 20; i++){
            let result = cv.minMaxLoc(dst, mask);
            let maxPoint = result.maxLoc;
            console.log(result.maxVal);
            cv.floodFill(dst, foo, maxPoint, new cv.Scalar());
            let color = new cv.Scalar(255 - i * 10, 0, 0, 255);
            let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
            cv.rectangle(src, maxPoint, point, color, 1, cv.LINE_8, 0);
            if (best == null && result.maxVal >= 0.8) {
              best = point;
            }
        }
  if (best == null) {
    return;
  }
  cv.imshow(domidCanvasOut, src);
  const box = itemCountPos(best.x, best.y, iconSizePx);
  console.log(box);
  drawRect(domidCanvasOut, box.x0, box.y0, box.x1, box.y1);

  const x = points2point(box);
  console.log('convert ', x);
  let rect = new cv.Rect(
          x.x, 
          x.y, 
          x.width,
          x.height
        );
  console.log(rect);
  dst = src.roi(rect);
  console.log('roi');
  cv.imshow('canvasCount', dst);
  console.log('show');
  //postprocessSeaport('canvasCount', 'canvasCount');
  console.log(box);
  await ocrItemCount('canvasCount', box);
  src.delete(); dst.delete(); mask.delete();
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

const itemCountPos = (x, y, iconSizePx) => {
  const x0 = x + 0.4 * iconSizePx;
  const y0 = y;
  const x1 = x + 1.7 * iconSizePx;
  const y1 = y - iconSizePx;
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
const ocrItemCount = async (domidIn, box) => {
  const worker = Tesseract.createWorker({
    logger: m => console.log(m)
  });

  const res = (async () => {
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
            top: box.x0, 
            left: box.y0, 
            width: Math.abs(box.x1 - box.x0), 
            height: Math.abs(box.y1 - box.y0)
    }};
    console.log(options);
    const result = await worker.recognize(imgElement); // , options);
    console.log(result);
    console.log(result.data.text);

    const itemCount = parseInt(result.data.text);
    window.alert('The selected item has ' + itemCount + ' crates in store.');
  })();

  return res;
  
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
  const result = await worker.recognize(image);
  console.debug(result);
  console.debug(result.data.text);

  const seaportIdx = result.data.words.findIndex((word) => {
    return word.text == "Seaport";
  });
  const word = result.data.words[seaportIdx];
  const width = seaport2Icon(word.bbox.x1 - word.bbox.x0);

  const markWord = (word) => {
    console.log(word);
    console.log("icon width should be ", seaport2Icon(word.bbox.x1 - word.bbox.x0));
    drawRect(domCanvas, word.bbox.x0, word.bbox.y0, word.bbox.x1, word.bbox.y1);
  }
  markWord(result.data.words[seaportIdx]);
  markWord(result.data.words[seaportIdx+1]);
  markWord(result.data.words[seaportIdx+2]);
  markWord(result.data.words[seaportIdx+3]);
  markWord(result.data.words[seaportIdx+4]);
  markWord(result.data.words[seaportIdx+5]);
  markWord(result.data.words[seaportIdx+6]);
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

// Borrowed from docs.opencv.org sources
const loadImageToCanvas = function(url, cavansId, iconSizePx) {
  let canvas = document.getElementById(cavansId);
  let ctx = canvas.getContext('2d');
  let img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    prepareItem('canvasItemIn', 'canvasItem', iconSizePx);
          imgmatch('imageSrc', 'canvasItem', 'canvasImgmatch', iconSizePx).then(() => {
    evil_counter += 1;
    let item = items[evil_counter];
    loadImageToCanvas('https://assets.foxhole.tools/' + item.imgPath, 'canvasItemIn', iconSizePx);
                });
  };
  img.src = url;
};

const countItems = async (iconSizePx) => {
  let item = items[evil_counter];
  await loadImageToCanvas('https://assets.foxhole.tools/' + item.imgPath, 'canvasItemIn', iconSizePx);
};

const run = async () => {
  console.log("run");
  let src = cv.imread('imageSrc');
  let canvasOCRMat = await postprocessSeaport(src);
  await drawRect(canvasOCRMat, 90, 90, 100, 100);
  cv.imshow('canvasTmp', canvasOCRMat);
  const width = await ocr(document.getElementById('canvasTmp');
  //const width = 32;
  console.warn('run: width ', width);
  //prepareItem('imageTempl', 'canvasItem', width);
  //imgmatch('imageSrc', 'canvasItem', 'canvasImgmatch', width);
  await countItems(width);
  src.delete();
}
