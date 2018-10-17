"use strict";

const vm = require('vm');
const fs = require('fs');
const chrome = {
                runtime: {
                  onInstalled: {
                    addListener: function(){}
                  }
                }
               };

const context = { chrome: chrome };
const code = fs.readFileSync('./app/background.js');

describe("Background JS", function() {

  it("invokes 'onInstalled'", function() {
    spyOn(chrome.runtime.onInstalled, 'addListener')
    vm.runInNewContext(code, context);
    expect(chrome.runtime.onInstalled.addListener).toHaveBeenCalled();
  });

});
