var prepareItemCache = {};

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
}

const clearCanvas = async (domCanvas) => {
  const context = domCanvas.getContext('2d');
  context.clearRect(0, 0, domCanvas.width, domCanvas.height);
}

const getImgPath = (imgPath) => {
  if (imgPath.startsWith('http')) {
    return imgPath;
  } else {
    return 'https://raw.githubusercontent.com/foxholetools/assets/master/dist/' + imgPath;
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

const printCSV = async (findings) => {
  // TODO this order is not strong enough and prone to reodering by the interpreter
  let sortedItems = items.sort((a, b) => {
    if (typeof a.supplyPyramid === 'undefined') {
      return 1;
    }
    if (typeof b.supplyPyramid === 'undefined') {
      return -1;
    }
    return a.supplyPyramid.priority - b.supplyPyramid.priority;
  });
  let names = "";
  let crates = "";
  let pyramid = "";
  let pyramidPrio = "";
  let limit = "";
  for (const item of sortedItems) {
    let found = findings.find((finding) => { return item.itemName === finding.name; });
    if (typeof found === 'undefined') {
      continue;
    }
    names += "" + found.name + "\n";
    crates += "" + found.count + "\n";
    if (typeof item.supplyPyramid === 'undefined') {
      pyramid += "\n";
      pyramidPrio += "\n";
    } else {
      pyramid += "" + item.supplyPyramid.cratesIdeal + "\n";
      pyramidPrio += "" + item.supplyPyramid.priority + "\n";
    }
    if (typeof item.stockpileLimitPrivate === 'undefined') {
      limit += "\n";
    } else {
      limit += "" + item.stockpileLimitPrivate + "\n";
    }
  }
  document.getElementById('preformattedNames').textContent = names;
  document.getElementById('preformattedCrates').textContent = crates;
  document.getElementById('preformattedPyramid').textContent = pyramid;
  document.getElementById('preformattedPyramidPriority').textContent = pyramidPrio;
  document.getElementById('preformattedLimit').textContent = limit;
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const getFaction = async () => {
  if (document.getElementById('colonialButton').checked) {
    return 'colonial';
  } else if (document.getElementById('wardenButton').checked) {
    return 'warden';
  }
}

const run = async () => {
  console.log("run");
  removeAllChildNodes(document.getElementById('itemlist'));
  removeAllChildNodes(document.getElementById('preformattedNames'));
  removeAllChildNodes(document.getElementById('preformattedCrates'));
  removeAllChildNodes(document.getElementById('preformattedPyramid'));
  removeAllChildNodes(document.getElementById('preformattedPyramidPriority'));
  removeAllChildNodes(document.getElementById('preformattedLimit'));
  await clearCanvas(document.getElementById('canvasImgmatch'));
  //var width = null;
  //if (false) {
  //  let src = cv.imread('imageSrc');
  //  let canvasOCRMat = await postprocessSeaport(src);
  //  cv.imshow('canvasImgmatch', src);
  //  src.delete();
  //  await drawRect(canvasOCRMat, 90, 90, 100, 100);
  //  let perfStart = performance.now();
  //  width = await ocr(mat2canvas(canvasOCRMat));
  //  canvasOCRMat.delete();
  //  let perfOCRed = performance.now();
  //  console.info("Seaport OCR: " + (perfOCRed - perfStart) + "ms");
  //} else {
  //  width = 32; // 1920x1080
  //  //width = 43; // 2560x1440
  //  width = 27;
  //}

  //let cal = await calibrate();
  ////let cal = {
  //  //'itemSizePx': 32,
  //  //'stockpileBox': new cv.Rect(0, 0, 495, 258)
  ////};
  //if (cal == null) {
  //  console.warn("Width is null");
  //  return;
  //}
  //console.warn('calibration ', cal);
  //let faction = await getFaction();
  //let findings = await countItems(faction, cal.itemSizePx, cal.stockpileBox);

  let tmpCanvas = document.getElementById('canvasTmp');
  let progressCb = (progress) => { 
    // TODO
  };
  let currentTemplate = document.getElementById('canvasItem');
  let visualizationCanvas = document.getElementById('canvasImgmatch');
  let list = document.getElementById("itemlist");
  let itemcounter = new ItemCounter(tmpCanvas, progressCb, currentTemplate, visualizationCanvas, list);
  itemcounter.setFaction(await getFaction());

  let fileselector = document.getElementById('fileInputSrc');
  let screenshotUrl = URL.createObjectURL(fileselector.files[0]);
  let screenshot = await loadImage(screenshotUrl);
  let findings = await itemcounter.count(screenshot); // takes long

  await printCSV(findings);
}
