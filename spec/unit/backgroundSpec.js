"use strict";

const vm = require('vm');
const fs = require('fs');
const chrome = require("sinon-chrome")
const context = { chrome: chrome };
const code = fs.readFileSync('./app/background.js');

describe("background.js", function() {

  describe("sets event listeners", function() {

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
    });

  });

  describe("chrome.tabs.onUpdated.addListener()", function() {

    it("does not invoke HandleUpdate() if there is no url", function() {
      vm.runInNewContext(code, context);
      chrome.tabs.onUpdated.dispatch(1234, { url: null });
      expect(chrome.storage.sync.get.called).toEqual(false);
    });

    describe("invokes HandleUpdate() if there is a url", function() {

      beforeEach(function() {
        vm.runInNewContext(code, context);
        chrome.tabs.onUpdated.dispatch(1234, { url: "test" });
        chrome.storage.sync.get.yields({ allData: [] });
      });

      it("gets all data from chrome.storage", function() {
        expect(chrome.storage.sync.get.called).toEqual(true);
      });

      it("pushes updated data into chrome.storage", function() {
        expect(chrome.storage.sync.set.called).toEqual(true);
      });

    });

    afterAll(function() {
      chrome.flush();
    });

  });

});
