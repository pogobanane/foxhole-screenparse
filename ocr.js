import Tesseract from 'tesseract.js';

export class OCR {
  constructor() {
    this.worker = null; // classical tesseract only
    this.AIworker = null; // default with AI
  }

  async init() {
    this.worker = Tesseract.createWorker();
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng', Tesseract.OEM.TESSERACT_ONLY);

    this.AIworker = Tesseract.createWorker({
      logger: m => console.debug(m)
    });
    await this.AIworker.load();
    await this.AIworker.loadLanguage('eng');
    await this.AIworker.initialize('eng');
  }

  async terminate() {
    await this.worker.terminate();
    await this.AIworker.terminate();
  }

  async itemCount(domElem, points) {
    const params = {
      //'tessedit_ocr_engine_mode': 0,
      //'tessedit_pageseg_mode': 8,
      //'tessedit_ocr_engine_mode': Tesseract.OEM.TESSERACT_ONLY,
      'tessedit_pageseg_mode': Tesseract.PSM.SINGLE_WORD,
      'tessedit_char_whitelist': '0123456789k+',
      'tessjs_create_hocr': '0',
      'tessjs_create_tsv': '0'
      //'tessjs_create_osd': '1'
    };
    await this.worker.setParameters(params);
    const options = { rectangle: { 
            top: points.x0, 
            left: points.y0, 
            width: Math.abs(points.x1 - points.x0), 
            height: Math.abs(points.y1 - points.y0)
    }};
    const result = await this.worker.recognize(domElem); //, options);
    console.debug(result);
    console.debug(result.data.text);

    return parseNKInt(result.data.text);
  }

  async detectSeaport(domElem) {
    const params = {
      //'tessedit_ocr_engine_mode': 0,
      //'tessedit_pageseg_mode': 8,
      //'tessedit_ocr_engine_mode': Tesseract.OEM.TESSERACT_ONLY,
      //'tessedit_pageseg_mode': Tesseract.PSM.SPARSE_TEXT,
      //'tessedit_char_whitelist': '0123456789',
      'tessjs_create_hocr': '0',
      'tessjs_create_tsv': '0'
      //'tessjs_create_osd': '1'
    };
    await this.AIworker.setParameters(params);
    const result = await this.AIworker.recognize(domElem);
    console.debug(result);
    console.debug(result.data.text);

    return result.data.text;
  }
}

const parseNKInt = (string) => {
  let str = string.replace(/(\r\n|\n|\r| )/g,"");
  if (str.endsWith("k+")) {
    let thousand = str.slice(0, -2);
    return parseInt(thousand) * 1000;
  } else {
    return parseInt(str);
  }
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
