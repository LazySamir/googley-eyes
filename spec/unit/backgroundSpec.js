"use strict";

const vm = require('vm');
const fs = require('fs');
const chrome = require("sinon-chrome")

const context = { chrome: chrome };
const code = fs.readFileSync('./app/background.js');

describe("Background JS", function() {

  describe("defines event listeners", function() {

    it("creates an addListener() for chrome.browserAction.onClicked", function() {
      spyOn(chrome.browserAction.onClicked, "addListener");
      vm.runInNewContext(code, context);
      expect(chrome.browserAction.onClicked.addListener).toHaveBeenCalled();
    })

    it("creates an addListener() for chrome.tabs.onUpdated", function() {
      spyOn(chrome.tabs.onUpdated, "addListener");
      vm.runInNewContext(code, context);
      expect(chrome.tabs.onUpdated.addListener).toHaveBeenCalled();
    })

  });

  describe("HandleUpdate()", function() {

      it("gets data from chrome.storage", function() {
        chrome.tabs.onUpdated.dispatch(1234, { url: "test" });
        vm.runInNewContext(code, context);
        expect(chrome.storage.sync.get.calledOnce).toEqual(true);
      });

      it("pushes updated array into chrome.storage", function() {
        chrome.tabs.onUpdated.dispatch(1234, { url: "test"});
        vm.runInNewContext(code, context);
        expect(chrome.storage.sync.set.withArgs({ allData: [ {url: "test"} ]}, function(){}).calledOnce).toEqual(true);
      });

  });

  afterAll(function() {
    chrome.flush();
  })

});
