"use strict";

const U = require("../../app/index/urlParser");
const urlParser = new U.UrlParser();
const URL = require('url-parse');
const allData = [ {url: "https://github.com/LazySamir", duration: 2000}, {url: "https://github.com/LazySamir", duration: 2000} ]

describe("UrlParser", function() {

  describe(".mapAllData", function() {

    it("maps all url info to domain and combined duration", function() {
      expect(urlParser.mapAllData(allData)).toEqual([{url: "github.com", duration: 4000}]);
    });

  });

});
