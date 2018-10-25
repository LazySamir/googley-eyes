"use strict";

describe("Features Spec", function() {

let app_url = 'chrome-extension://emdmccobpkgjdafpffbmagbbcjkkminb/index.html'

  describe("Extension is loaded correctly", function() {

    it("index.html can be opened", function() {
      browser.url(app_url);
      expect(browser.getTitle()).toEqual("Googley Eyes");
    });

  });

  describe("Index View", function() {

    it("displays visited URLs", function() {
      browser.url("https://www.bbc.co.uk");
      browser.pause(5000);
      browser.url("https://www.google.co.uk")
      browser.url(app_url);
      expect(browser.getText("#url-container")).toContain("www.bbc.co.uk");
      expect(browser.getText("#url-container")).toContain("00:00:06");
    });


    it("displays a pie chart", function() {
      browser.url("https://www.bbc.co.uk");
      browser.url(app_url);
      browser.pause(100);
      expect(browser.getText("#chart-container")).toContain("CanvasJS.com");
    });

  });

  describe("New Tab View", function() {

    it("displays latest URLs", function() {
      browser.url("https://www.bbc.co.uk");
      browser.url("chrome://newtab/");
      expect(browser.getText("#links-container")).toContain("https://www.bbc.co.uk/");
    });

    it("displays total time online today", function() {
      browser.pause(100);
      browser.url("chrome://newtab/")
      expect(browser.getText("#total-time")).toContain("0 hours and 0 minutes")
    });

  });

});
