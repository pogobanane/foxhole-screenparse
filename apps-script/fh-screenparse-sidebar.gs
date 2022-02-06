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
  let column = sheet.getCurrentCell().getColumn();
  var data = sheet.getDataRange().getValues();
  let stockpiles = [];

  // town range
  let row = data.findIndex((a) => {
    return a.indexOf("Town Name") !== -1;
  });
  if (row === -1) { 
    throw "Town Name not found";
  }
  row += 1; // fix start counting at 0
  let range = sheet.getRange(row, column).getMergedRanges()[0];
  if (typeof range === 'undefined') {
    throw "Not a range";
  }
  let rCount = range.getNumColumns();
  let rStart = range.getColumn();
  let townname = sheet.getRange(row, rStart).getValue();

  // region names
  row = data.findIndex((a) => {
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
  let stockpiles = sheet.getRange(row, rStart, 1, rCount).getValues();

  return {
    "townname": townname,
    "regionname": regionname,
    "stockdesc": stockdesc,
    "stockpiles": stockpiles,
  };
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
