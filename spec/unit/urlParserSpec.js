"use strict";

const U = require("../../app/index/urlParser");
const urlParser = new U.UrlParser();
const URL = require('url-parse');
const allData = [ {url: "https://github.com/LazySamir", duration: 2000}, {url: "https://github.com/LazySamir", duration: 2000} ]
const mappedData = [ { url: "github.com", duration: 2000 }, { url: "github.com", duration: 2000 }, { url: "google.com", duration: 2000 } ]

describe("UrlParser", function() {

  describe(".parseUrl()", function() {

    it("returns the domain name and duration of the url", function() {
      expect(urlParser.parseUrl({ url: "https://github.com/LazySamir/googley-eyes/pull/53", duration: 2000 })).toEqual({url: "github.com", duration: 2000})
    });

  });

  describe(".mapAllData", function() {

    it("maps all url info to domain and combined duration", function() {
      expect(urlParser.mapAllData(allData)).toEqual([{url: "github.com", duration: 4000}]);
    });

  });

});
