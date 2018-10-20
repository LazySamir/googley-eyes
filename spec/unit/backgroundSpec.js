"use strict";

const vm = require('vm');
const fs = require('fs');
const chrome = require("sinon-chrome")
const context = { chrome: chrome };
const code = fs.readFileSync('./app/background.js');

describe("Background JS", function() {

  describe("defines event listeners", function() {

    beforeEach(function() {
      vm.runInNewContext(code, context);
    });

    it("creates an addListener() for chrome.browserAction.onClicked", function() {
      expect(chrome.browserAction.onClicked.addListener.called).toEqual(true);
    });

    it("creates an addListener() for chrome.tabs.onUpdated", function() {
      expect(chrome.tabs.onUpdated.addListener.called).toEqual(true);
    });

    afterAll(function() {
      chrome.flush();
    })

  });

  describe("HandleUpdate()", function() {

    beforeEach(function() {
      vm.runInNewContext(code, context);
      chrome.tabs.onUpdated.dispatch(1234, { url: "test" });
      chrome.storage.sync.get.yields({ allData: [] });
    });

    it("gets data from chrome.storage", function() {
      expect(chrome.storage.sync.get.called).toEqual(true);
    });

    it("pushes updated array into chrome.storage", function() {
      console.log(chrome.storage.sync.set.calledWith);
      expect(chrome.storage.sync.set.called).toEqual(true);
    });

    afterAll(function() {
      chrome.flush();
    })

  });

});
