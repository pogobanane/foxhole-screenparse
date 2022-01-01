var itemcounter = null;

const connect_file_img = (imageid, fileinputid) => {
  let imgElement = document.getElementById(imageid);
  let inputElement = document.getElementById(fileinputid);
  inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    document.getElementById('imageSrc').removeAttribute("hidden");
  }, false);
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
    let found = findings.items.find((finding) => { return item.itemName === finding.name; });
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

  let tmpCanvas = document.getElementById('canvasTmp');
  let progressCb = (progress) => {
    let roundedPercent = Math.ceil(progress.percent * 100);
    if(roundedPercent > 0 && roundedPercent < 100) {
      document.getElementById('progressBar').parentElement.hidden = false;
      document.getElementById('resultCard').hidden = false;
    }
    document.getElementById('progressBar').setAttribute("style", "width: " + roundedPercent + "%;");
    document.getElementById('progressBar').setAttribute("ariaValueNow", roundedPercent);
    document.getElementById('progressBar').innerHTML = roundedPercent + "%";
    if(roundedPercent === 100) {
      document.getElementById('progressBar').parentElement.hidden = true;
      document.getElementById('resultTable').hidden = false;
    }
  };
  let currentTemplate = document.getElementById('canvasItem');
  let visualizationCanvas = document.getElementById('canvasImgmatch');
  let list = document.getElementById("itemlist");
  itemcounter = new ItemCounter(tmpCanvas, progressCb, currentTemplate, visualizationCanvas, list);
  await itemcounter.init();
  itemcounter.setFaction(await getFaction());

  let fileselector = document.getElementById('fileInputSrc');
  let screenshotUrl = URL.createObjectURL(fileselector.files[0]);
  let screenshot = await loadImage(screenshotUrl);
  let findings = await itemcounter.count(screenshot); // takes long
  if (findings === null) {
    return;
  }
  if (findings.stockpileType === null) {
    window.alert('Stockpile type unknown. Assuming a Seaport or Storage Depot...');
  }
  if (!findings.stockpileType.crateBased) {
    window.alert('Stockpile is not crate based. Some Table columns are wrong.');
  }

  await printCSV(findings);
}

const abort = () => {
  itemcounter.abort = true;
}
