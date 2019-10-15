/**
 *
 */
function onOpen() {
  // SpreadsheetApp.flush();
  var book;
  try {
    book = SpreadsheetApp.getActive();
    var sheet = book.getSheetByName('Separators');
    var index = book
      .getDataRange()
      .getValues()
      .map(function(row) {
        return row[1];
      });
    var locale = book.getSpreadsheetLocale();
    if (index.indexOf(locale) > -1) return;
    var separator = sheet
      .getRange('E1')
      .getFormula()
      .replace(/^.*?([,;]).*?$/, '$1');
    book.appendRow([new Date(), locale, separator]);
    book.toast('Done', '', 0);
  } catch (err) {
    console.error(err, err.stack);
    book && book.toast(err, 'error', 0);
  }
}
