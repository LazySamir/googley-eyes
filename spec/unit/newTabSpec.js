"use strict";

// const clock = require('../../app/newTab/clock');
// const links = require('../../app/newTab/latestLinks');

describe("newTab", function() {


  describe("clock.js", function() {

    let time = new Date(2018, 10, 21, 13, 24, 1);

    beforeEach(function() {
      jasmine.clock().install();
      jasmine.clock().mockDate(time);
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it("returns the current time", function() {
      expect(new Date().getTime()).toEqual(time.getTime());
    });

    it("adds a zero to numbers less than 10", function() {
      // expect(clock.addZero(5)).toEqual(05);
    });

  });

  describe("latestLinks.js", function() {

    it("getsLatestUrls from local storage", function() {
      // expect(chrome.storage.sync.get.called).toEqual(true);
    });

    it("converts array of objects to HTML string", function() {

    });

    it("limits the display of HTML to 40 chars", function() {

    });

    it("injects the html into the links-container", function() {

    });

  });

});
