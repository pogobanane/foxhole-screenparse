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

function doSmth() {
    var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);
}
