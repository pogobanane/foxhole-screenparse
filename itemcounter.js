class ItemCounter {
  constructor(tmpCanvas, progressCallback = (progress)=>{}, currentTemplate = null, visualizationCanvas = null) {
    this.tmpCanvas = tmpCanvas; // scratchpad canvas element (should be display: none)
    this.progressCallback = progressCallback; // TODO ({percent, step, steps, description, error}) => {}
    this.currentTemplate = null; // template used for current matching
    this.visCanvas = visualizationCanvas; // visualization of detected items
    this.abort = false;
    this.faction = null; // 'colonial' or 'warden'
    this.srcImg = null;
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
    this.srcImg = imageElem;

    let cal = await this._calibrate();
    if (cal == null) {
      console.warn("Width is null");
      return null;
    }
    console.warn('calibration ', cal);
    let findings = await countItems(this.faction, cal.itemSizePx, cal.stockpileBox);
    return findings;
  }

  async _calibrate() {
    let image = cv.imread(this.srcImg);
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
}
