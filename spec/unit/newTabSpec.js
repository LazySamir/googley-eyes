"use strict";

const vm = require('vm');
const fs = require('fs');
const C = require('../../app/newTab/clock')

describe("newTab", function() {

  describe("Clock", function() {

    let time = new Date(2018, 10, 21, 13, 24, 1);
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

  });

  describe("LatestLinks", function() {

    it("gets urls from local storage", function() {
      // expect(chrome.storage.sync.get.called).toEqual(true);
    });

  });

});
