//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("Fh-screenparse")
   .addItem("Send feedback", "showFeedbackDialog")
   .addItem("Sidebar", "showSidebar")
   .addToUi();
}

function showFeedbackDialog() {
 var widget = HtmlService.createHtmlOutputFromFile("testhtml.html");
 SpreadsheetApp.getUi().showModalDialog(widget, "Send feedback");
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('packed.html')
      .setTitle('My custom sidebar');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function fhInsert(s) {
  var sheet = SpreadsheetApp.getActiveSheet();
  let column = sheet.getCurrentCell().getColumn();
  var data = sheet.getDataRange().getValues();
  for (let item of s.items) {
    var row = data.findIndex((a) => {
      return a.indexOf(item.name) !== -1;
    });
    row += 1; // fix start counting at 1
    sheet.getRange(row, column).setValue(item.count);
  }
}
