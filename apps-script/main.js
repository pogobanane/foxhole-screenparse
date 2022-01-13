var itemcounter = null;
var globfindings = null;

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
      pyramid += "none\n";
      pyramidPrio += "none\n";
    } else {
      pyramid += "" + item.supplyPyramid.cratesIdeal + "\n";
      pyramidPrio += "" + item.supplyPyramid.priority + "\n";
    }
    if (typeof item.stockpileLimitPrivate === 'undefined') {
      limit += "none\n";
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
  document.getElementById("insert").disabled = true;
  removeAllChildNodes(document.getElementById('itemlist'));
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
    }
  };
  let currentTemplate = document.getElementById('canvasItem');
  let visualizationCanvas = document.getElementById('canvasImgmatch');
  let list = document.getElementById("itemlist");
  let findings;
  document.getElementById("run-spinner").setAttribute("style", "display: inline-block;")
  try {
    itemcounter = new ItemCounter(tmpCanvas, progressCb, currentTemplate, visualizationCanvas, list);
    await itemcounter.init();
    itemcounter.iconpacksLoc = "https://raw.githubusercontent.com/pogobanane/foxhole-iconpacks/main/";
    itemcounter.setFaction(await getFaction());
    let iconpack = document.getElementById("iconpack-select").selectedOptions[0].value;
    itemcounter.setIconpack(iconpack);

    let fileselector = document.getElementById('fileInputSrc');
    let screenshotUrl = URL.createObjectURL(fileselector.files[0]);
    let screenshot = await loadImage(screenshotUrl);
    findings = await itemcounter.count(screenshot); // takes long
  } 
  catch (e) {
    console.error(e);
  }
  document.getElementById("run-spinner").setAttribute("style", "display: none;")
  if (findings === null) {
    window.alert('No stockpile found on screenshot.');
    return;
  }
  if (findings.stockpileType === null) {
    window.alert('Stockpile type unknown. Assuming a Seaport or Storage Depot...');
  }
  if (!findings.stockpileType.crateBased) {
    window.alert('Stockpile is not crate based. Some Table columns are wrong.');
  }

  document.getElementById("insert").disabled = false;
  globfindings = findings;
  //await printCSV(findings);
}

const abort = () => {
  itemcounter.abort = true;
}

const insert = () => {
  document.getElementById("insert-spinner").setAttribute("style", "display: inline-block;")
  google.script.run
  .withSuccessHandler((ret) => {
    document.getElementById("insert-spinner").setAttribute("style", "display: none;")
    console.log(ret);
  })
  .withFailureHandler((error) => {
    document.getElementById("insert-spinner").setAttribute("style", "display: none;")
    console.error(error);
    window.alert(error);
  })
  .fhInsert(globfindings);
  //.fhInsert({ "items": [ { "name": "Petrol", "count": 1337 } ] });
}

const loaded = async () => {
  connect_file_img('imageSrc', 'fileInputSrc');

  for (let pack of known_iconpacks) {
    let option = document.createElement('option');
    option.setAttribute('value', pack.name);
    let label = document.createTextNode(pack.label);
    option.appendChild(label);
    document.getElementById('iconpack-select').appendChild(option);
  }
}
