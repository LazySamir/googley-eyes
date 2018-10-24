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

    it("creates an addListener() for chrome.tabs.onActivated", function() {
      expect(chrome.tabs.onActivated.addListener.called).toEqual(true);
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

    });

    afterEach(function() {
      chrome.flush();
    });

  });

  describe("chrome.tabs.onActivated.addListener()", function() {


    describe("invokes handleUpdate() if there is a tab change", function() {

      beforeEach(function() {
        chrome.storage.sync.get.yields({ allData: [] });
        chrome.tabs.get.yields({"url": "test"})
        vm.runInNewContext(code, context);
        chrome.tabs.onActivated.dispatch({});
      });

      it("invokes chrome.tabs.get when event listener is fired", function() {
        expect(chrome.tabs.get.calledOnce).toEqual(true);
      })

      it("gets all data from chrome.storage", function() {
        expect(chrome.storage.sync.get.calledOnce).toEqual(true);
      });

      it("pushes updated data into chrome.storage", function() {
        expect(chrome.storage.sync.set.calledOnce).toEqual(true);
      });

    });

    afterEach(function() {
      chrome.flush();
    });

  });

  describe("clearStorage()", function() {

    beforeEach(function() {
      chrome.storage.sync.get.yields({ allData: [] });
      chrome.tabs.get.yields({"url": "test"})
      vm.runInNewContext(code, context);
      chrome.tabs.onActivated.dispatch({});
    });

    it("invokes chrome.storage.sync.clear if dates don't match", function() {
      expect(chrome.storage.sync.clear.called).toEqual(true)
    })

    it("does not invokes chrome.storage.sync.clear if date do match", function() {
      chrome.tabs.onActivated.dispatch({});
      expect(chrome.storage.sync.clear.calledTwice).toEqual(false)
    })


    afterEach(function() {
      chrome.flush();
    });

  })
});
