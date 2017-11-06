this.demoTestGoogle = function (browser) {
    console.log('demoTestGoogle!');
  browser
    .url('http://www.google.com')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', 'nightwatch')
    .waitForElementVisible('button[name=btnG]', 1000)
    .click('button[name=btnG]')
    .pause(1000)
    .assert.containsText('#main', 'Sorete The Night Watch')
    .end();
};
