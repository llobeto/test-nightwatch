this.failedTest = function (browser) {
  browser
    .url('http://www.google.com')
    .assert.containsText('#main', 'Sorete The Night Watch')
    .end();
};

this.errorTest = function (browser) {
  browser.xxx();
};

this.okTest = function (browser) {
  browser.end();
};
