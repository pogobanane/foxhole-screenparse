var itemcounter = null;
var stockpileinputs = [];
var screenshot = null; // will be populated in connect_file_img

const connect_file_img = (imageid, fileinputid) => {
  let imgElement = document.getElementById(imageid);
  let inputElement = document.getElementById(fileinputid);
  inputElement.addEventListener('change', async (e) => {
    // mark screenshot as changing to prevent analysis
    screenshot = "loading ...";
    // show file
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    document.getElementById('imageSrc').removeAttribute("hidden");
    // store file in _our_ memory
    let file = document.getElementById(fileinputid).files[0];
    let screenshotUrl = URL.createObjectURL(file);
    screenshot = await loadImage(screenshotUrl);
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

const getStockpile = async () => {
  return document.querySelector('input[name="stockpile"]:checked').value;
}

const disableStockpileInput = (b) => {
  let div = document.getElementById("stockpile-select");
  for (let input of stockpileinputs) {
    input.disabled = b;
  }
}

const printStockpileInput = () => {
  // long running
  let ret = google.script.run
  .withSuccessHandler((piles) => {
    console.log(piles);
    document.getElementById("stockpile-spinner").setAttribute("style", "display: none;")
    let regionpiles = piles.reduce(function (r, a) {
        r[a.regionname] = r[a.regionname] || [];
        r[a.regionname].push(a);
        return r;
    }, Object.create(null));

    let div = document.getElementById("stockpile-select");
    for (let region of Object.keys(regionpiles)) {
      let stockpiles = regionpiles[region];
      let b = document.createElement('b');
      let text = document.createTextNode(region);
      b.appendChild(text)
      let br = document.createElement('br');
      div.appendChild(b);
      div.appendChild(br);
      for (let stockpile of stockpiles) {
        let option = document.createElement('input');
        option.setAttribute('type', 'radio');
        option.setAttribute('name', 'stockpile');
        option.setAttribute('id', 'stockpile' + stockpile.column);
        option.setAttribute('value', stockpile.column);
        option.setAttribute('checked', 'checked');
        let label = document.createElement('label');
        let text = document.createTextNode("\u00A0" + stockpile.townname + ': ');
        let i = document.createElement('i');
        let text2 = document.createTextNode(stockpile.stockpile);
        i.appendChild(text2);
        let br = document.createElement('br');
        label.appendChild(text);
        label.appendChild(i);
        label.setAttribute('for', 'stockpile' + stockpile.column);
        stockpileinputs.push(option);
        div.appendChild(option);
        div.appendChild(label);
        div.appendChild(br);
      }
    }
  })
  .withFailureHandler((error) => {
    console.error(error);
    window.alert(error);
  })
  .fhColumnMap();
  console.warn(ret);
}

const run = async () => {
  console.log("run");
  disableStockpileInput(true);
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
    let iconpacksLoc = "https://raw.githubusercontent.com/pogobanane/foxhole-iconpacks/main/";
    if (itemcounter === null) {
      itemcounter = new ItemCounter(tmpCanvas, progressCb, iconpacksLoc, currentTemplate, visualizationCanvas, list);
      await itemcounter.init();
    }
    itemcounter.setFaction(await getFaction());
    let iconpack = document.getElementById("iconpack-select").selectedOptions[0].value;
    itemcounter.setIconpack(iconpack);

    if (screenshot === null) {
      screenshotUrl = document.getElementById('imageSrc').src;
      screenshot = await loadImage(screenshotUrl);
    }
    findings = await itemcounter.count(screenshot); // takes long
  } 
  catch (e) {
    console.error(e);
  }
  if (findings === null) {
    window.alert('No stockpile found on screenshot.');
    document.getElementById("run-spinner").setAttribute("style", "display: none;")
    disableStockpileInput(false);
    return;
  }
  if (findings.stockpileType === null) {
    window.alert('Stockpile type unknown. Assuming a Seaport or Storage Depot...');
  }
  if (!findings.stockpileType.crateBased) {
    window.alert('Stockpile is not crate based. Some Table columns are wrong.');
  }

  // insert
  google.script.run
  .withSuccessHandler((ret) => {
    console.log(ret);
  })
  .withFailureHandler((error) => {
    console.error(error);
    window.alert(error);
  })
  .fhInsert(findings, await getStockpile());
  document.getElementById("run-spinner").setAttribute("style", "display: none;")
  disableStockpileInput(false);
}

const abort = () => {
  itemcounter.abort = true;
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

  printStockpileInput();
}
