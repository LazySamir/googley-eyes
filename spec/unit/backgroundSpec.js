"use strict";

const vm = require('vm');
const fs = require('fs');
const chrome = {
                tabs: {
                  onActivated: {
                    addListener: function(value) {}
                  }
                }
               };

const context = { chrome: chrome };
const code = fs.readFileSync('./app/background.js');


describe("Background JS", function() {

  describe("defines our event listeners", function() {

    it("creates an addListener() for chrome.tabs.onActivated", function() {
      spyOn(chrome.tabs.onActivated, 'addListener');
      vm.runInNewContext(code, context);
      expect(chrome.tabs.onActivated.addListener).toHaveBeenCalled();
    });

  });

});
