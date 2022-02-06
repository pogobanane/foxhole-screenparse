//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("foxhole-screenparse")
   .addItem("Screenshot Analyzer", "showSidebar")
   .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('packed.html')
      .setTitle('foxhole-screenparse');
  SpreadsheetApp.getUi().showSidebar(html);
}

function fhColumnMap() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //let column = sheet.getCurrentCell().getColumn();
  var data = sheet.getDataRange().getValues();
  let stockpiles = [];
  let magicCol = 3;

  // town range
  let townrow = data.findIndex((a) => {
    return a.indexOf("Town Name") !== -1;
  });
  if (townrow === -1) { 
    throw "Town Name not found";
  }
  let townnames = data[townrow];
  townrow += 1; // fix start counting at 0
  let column = magicCol + 1;
  while (column<townnames.length) {
    let range = sheet.getRange(townrow, column).getMergedRanges()[0];
    if (typeof range === 'undefined') {
      throw "Not a range";
    }
    let rCount = range.getNumColumns();
    rangeSize = rCount;
    let rStart = range.getColumn();
    let townname = sheet.getRange(townrow, rStart).getValue();

    // region names
    let row = data.findIndex((a) => {
      return a.indexOf("Region Name") !== -1;
    });
    if (row === -1) { 
      throw "Region Name not found";
    }
    row += 1; // fix start counting at 0
    let regionname = sheet.getRange(row, rStart).getValue();  

    // Stockpile Description
    row = data.findIndex((a) => {
      return a.indexOf("Stockpile Description") !== -1;
    });
    if (row === -1) { 
      throw "Stockpile Description not found";
    }
    row += 1; // fix start counting at 0
    let stockdesc = sheet.getRange(row, rStart).getValue();  

    // stockpile names
    row = data.findIndex((a) => {
      return a.indexOf("Stockpile Name") !== -1;
    });
    if (row === -1) { 
      throw "Stockpile Name not found";
    }
    row += 1; // fix start counting at 0
    sheet.getRange(row, rStart, 1, rCount).getValues()[0].forEach((pilename) => {
      if (pilename === 'Total' || pilename === '--') {
        return;
      }
      stockpiles.push({
        "townname": townname,
        "regionname": regionname,
        "stockdesc": stockdesc,
        "stockpile": pilename,
        "column": column,
      });
    });
    column += rangeSize;
  }
  return stockpiles;
}

function fhInsert(s) {
  var sheet = SpreadsheetApp.getActiveSheet();
  let column = sheet.getCurrentCell().getColumn();
  var data = sheet.getDataRange().getValues();

  // update item counts
  for (let item of s.items) {
    var row = data.findIndex((a) => {
      return a.indexOf(item.name) !== -1;
    });
    if (row === -1) {
      continue;
    }
    row += 1; // fix start counting at 1
    sheet.getRange(row, column).setValue(item.count);
  }

  // update timedate
  row = data.findIndex((a) => {
    return a.indexOf("Last updated with foxhole-screenparse") !== -1;
  });
  if (row !== -1) {
    row += 1; // fix start counting at 1
    sheet.getRange(row, column).setValue(new Date()).setNumberFormat("hh:mm");
  }
}
