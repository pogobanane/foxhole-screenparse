class OCR {
  constructor() {
    this.worker = null; 
  }

  async init() {
    this.worker = Tesseract.createWorker({
      logger: m => console.debug(m)
    });
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng', Tesseract.OEM.TESSERACT_ONLY);
  }

  async itemCount(domElem, points) {
    const params = {
      //'tessedit_ocr_engine_mode': 0,
      //'tessedit_pageseg_mode': 8,
      //'tessedit_ocr_engine_mode': Tesseract.OEM.TESSERACT_ONLY,
      'tessedit_pageseg_mode': Tesseract.PSM.SINGLE_WORD,
      'tessedit_char_whitelist': '0123456789',
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

    const itemCount = parseInt(result.data.text);

    return itemCount;
  }
}
