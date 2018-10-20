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

    afterEach(function() {
      chrome.flush();
    });

  });

  describe("chrome.tabs.onUpdated.addListener()", function() {

    it("does not invoke handleUpdate() if there is no change in url", function() {
      vm.runInNewContext(code, context);
      chrome.tabs.onUpdated.dispatch(1234, { url: null });
      expect(chrome.storage.sync.get.called).toEqual(false);
    });

    describe("invokes handleUpdate() if there is a change in url", function() {

      beforeEach(function() {
        chrome.storage.sync.get.yields({ allData: [] });
        vm.runInNewContext(code, context);
        chrome.tabs.onUpdated.dispatch(1234, { "url": "test" });
      });

      it("gets all data from chrome.storage", function() {
        expect(chrome.storage.sync.get.calledOnce).toEqual(true);
      });

      it("pushes updated data into chrome.storage", function() {
        expect(chrome.storage.sync.set.calledOnce).toEqual(true);
      });

      it("does not set data in chrome.storage if it is already saved", function() {
        chrome.tabs.onUpdated.dispatch(1234, { "url": "test" });
        expect(chrome.storage.sync.set.calledOnce).toEqual(true);
        expect(chrome.storage.sync.set.calledTwice).toEqual(false);
      });

    });

    afterEach(function() {
      chrome.flush();
    });

  });

});
