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

  const markWord = async (word) => {
    console.log(word);
    console.log("icon width should be ", seaport2Icon(word.bbox.x1 - word.bbox.x0));
    //let debugCanvas = document.getElementById('canvasImgmatch');
    let debugMat = cv.imread('canvasImgmatch');
    await drawRect(debugMat, word.bbox.x0, word.bbox.y0, word.bbox.x1, word.bbox.y1);
    cv.imshow('canvasImgmatch', debugMat);
    debugMat.delete();
  }
  await markWord(result.data.words[seaportIdx]);
  await markWord(result.data.words[seaportIdx+1]);
  await markWord(result.data.words[seaportIdx+2]);
  await markWord(result.data.words[seaportIdx+3]);
  await markWord(result.data.words[seaportIdx+4]);
  await markWord(result.data.words[seaportIdx+5]);
  await markWord(result.data.words[seaportIdx+6]);
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
  //cv.cvtColor(matIn, step, cv.COLOR_RGBA2GRAY, 0);
  //let lut = [];
  //lut += interpolateArray([0, 0], 256/2);
  //lut += interpolateArray([0, 7*(256/8)], 7*(256/8));
  //lut += interpolateArray([7*(256/8), 255], 1*(256/8));
  //console.log(lut);
  //cv.LUT(src, lut, dst);
  cv.threshold(matIn, step2, 0.75*256, 255, cv.THRESH_BINARY);
  //cv.threshold(step, dst, 0.65*256, 0, cv.THRESH_TOZERO);
  cv.bitwise_not(step2, step);
  step2.delete();
  return step;
}

// pixel on fhd
const seaport2Icon = (width) => {
  // icon 29?@ 1600x900,  seaport 40?
  // icon 32 @ 1920x1080, seaport 51
  // icon 43 @ 2560x1440, seaport 66
  // icon.width / seaport.width = x / width
  const f = 32.0 * width / 51.0;
  return Math.round(f);
}
