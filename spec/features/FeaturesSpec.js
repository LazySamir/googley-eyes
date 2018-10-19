"use strict";

describe("Features Spec", function() {

  describe("Extension is loaded correctly", function() {

    it("opens index.html", function() {
      browser.url('chrome-extension://mdkflpjihkchihpolofpmjnoinddfkik/index.html')
      expect(browser.getTitle()).toEqual("Googley Eyes");
      browser.pause(10000);
    });

  });

  describe("URLs are recorded", function() {

    it("displays visited URLs on index.html", function() {
      browser.url("https://www.bbc.co.uk");
      browser.url("chrome-extension://mdkflpjihkchihpolofpmjnoinddfkik/index.html")
      expect(browser.getHTML(".url_container", false)).toEqual("<ul><li>https://www/bbc.co.uk</li></ul>");
      browser.pause(10000)
    });

  });

});
