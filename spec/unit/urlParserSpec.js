"use strict";

const U = require("../../app/index/urlParser");
const urlParser = new U.UrlParser();
const URL = require('url-parse');

describe("UrlParser", function() {

  describe(".parseUrl()", function() {

    it("returns the domain name of the url", function() {
      expect(urlParser.parseUrl("https://github.com/LazySamir/googley-eyes/pull/53")).toEqual("github.com")
    });

  });

});
