"use strict";

const vm = require('vm');
const fs = require('fs');
const C = require('../../app/newTab/clock');
const L = require('../../app/newTab/latestLinks');
const chrome = require('sinon-chrome');

describe("newTab", function() {

  describe("Clock", function() {

    let time = new Date("October 21, 2018 13:24:01")
    console.log(time);
    let clock = new C.Clock();

    beforeEach(function() {
      jasmine.clock().install();
      jasmine.clock().mockDate(time);
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it("determines new pretty time", function() {
      expect(clock.getNewTime()).toEqual([13, 24, "01"])
    });

    it("determines new pretty date", function() {
      expect(clock.getNewDate()).toEqual("Sunday, October 21, 2018")
    })

  });

  describe("LatestLinks", function() {
    let container = {
          innerHTML: {}
        };
    let latestLinks = new L.LatestLinks(container, chrome);
    let result = {
          allData: []
        };

    it("gets urls from local storage", function() {
      spyOn(latestLinks, 'convertToHTML');
      chrome.storage.sync.get.yields(result);
      latestLinks.getLatestUrls();
      expect(latestLinks.convertToHTML).toHaveBeenCalledWith(result);
    });

    it("converts to a pretty HTML string", function() {
      spyOn(latestLinks, 'injectHTML');
      let result = { allData: [ { url: "this_is_a_test_to_check_for_a_long_pretty_print" } ] };
      latestLinks.convertToHTML(result);
      expect(latestLinks.injectHTML).toHaveBeenCalledWith('<ul><li><a href="this_is_a_test_to_check_for_a_long_pretty_print">this_is_a_test_to_check_for_a_long_pr...</a></li></ul>')
    });

    it("injects string into DOM", function() {
      latestLinks.injectHTML("test");
      expect(container.innerHTML).toEqual("test")
    });

  });

});
