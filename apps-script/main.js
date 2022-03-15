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

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const getFilter = async () => {
  return {
    'colonial': document.getElementById('colonialButton').checked,
    'warden': document.getElementById('wardenButton').checked,
    'shippables': true,
  };
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

    let first = true;
    let div = document.getElementById("stockpile-select");
    removeAllChildNodes(div);
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
        if (first) {
          option.setAttribute('checked', 'checked');
          first = false;
        }
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
    _alert(error);
  })
  .fhColumnMap();
  console.warn(ret);
}

const _alert = (msg) => {
  google.script.run.fhAlert(msg);
}

const run = async () => {
  console.log("run");
  disableStockpileInput(true);
  document.getElementById('run').setAttribute("disabled", "disabled");
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
  let errorCb = (msg) => {
    _alert(msg);
  };
  let currentTemplate = document.getElementById('canvasItem');
  let visualizationCanvas = document.getElementById('canvasImgmatch');
  let list = document.getElementById("itemlist");
  let findings;
  document.getElementById("run-spinner").setAttribute("style", "display: inline-block;")
  try {
    let iconpacksLoc = "https://raw.githubusercontent.com/pogobanane/foxhole-iconpacks/main/";
    if (itemcounter === null) {
      itemcounter = new ItemCounter(tmpCanvas, progressCb, errorCb, iconpacksLoc, currentTemplate, visualizationCanvas, list);
      await itemcounter.init();
    }
    itemcounter.setFilter(await getFilter());
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
    _alert('No stockpile found on screenshot.');
    document.getElementById("run-spinner").setAttribute("style", "display: none;")
    disableStockpileInput(false);
    document.getElementById('run').removeAttribute("disabled");
    return;
  }
  if (findings.stockpileType === null) {
    _alert('Stockpile type unknown. Assuming a Seaport or Storage Depot...');
  }
  if (!findings.stockpileType.crateBased) {
    _alert('Stockpile is not crate based. Some Table columns are wrong.');
  }

  // insert
  google.script.run
  .withSuccessHandler((ret) => {
    console.log(ret);
    document.getElementById("run-spinner").setAttribute("style", "display: none;")
    disableStockpileInput(false);
    document.getElementById('run').removeAttribute("disabled");
  })
  .withFailureHandler((error) => {
    console.error(error);
    _alert(error);
    document.getElementById("run-spinner").setAttribute("style", "display: none;")
    disableStockpileInput(false);
    document.getElementById('run').removeAttribute("disabled");
  })
  .fhInsert(findings, await getStockpile());
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
