"use strict";

describe("The extension is loaded correctly", function() {

  it("opens index.html", function() {
    browser.url('chrome-extension://lkafcimnckgafbdekhjmpnjpgmiaihag/index.html')
    expect(browser.getHTML("h1", false)).toEqual("hello");
  });

});
