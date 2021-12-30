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
    console.warn(progress); // TODO do smth with it
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
