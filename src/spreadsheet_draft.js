/**
 *
 */
function onOpen() {
  var book;
  try {
    book = SpreadsheetApp.getActive();
    var separator = SpreadsheetApp.getActive()
      .getRange('E1')
      .getFormula()
      .replace(/^.*?([,;]).*?$/, '$1');
    book.appendRow([new Date(), book.getSpreadsheetLocale(), separator]);
  } catch (err) {
    console.error(err, err.stack);
    book && book.toast(err, 'error', 0);
  }
}
