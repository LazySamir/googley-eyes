"use strict";

describe("Features Spec", function() {

let app_url = 'chrome-extension://loindgcbdjommoaimpnmkhnnbhpeoolh/index.html'

  describe("Extension is loaded correctly", function() {

    it("index.html can be opened", function() {
      browser.url(app_url)
      browser.pause(200);
      expect(browser.getTitle()).toEqual("Googley Eyes");
      browser.pause(100);
    });

  });

  describe("Index View", function() {

    it("displays visited URLs", function() {
      browser.url("https://www.bbc.co.uk");
      browser.url(app_url)
      expect(browser.getText("#url_container")).toContain("https://www.bbc.co.uk");
      browser.pause(100)
    });

  });

  describe("New Tab View", function() {

    it("displays latest URLs", function() {
      // browser.pause(100);
      browser.url("https://www.bbc.co.uk");
      browser.url("chrome://newtab/")
      browser.pause(200)
      expect(browser.getText("#links-container")).toContain("https://www.bbc.co.uk/");
      // browser.pause(10000)
    });

  });

});
