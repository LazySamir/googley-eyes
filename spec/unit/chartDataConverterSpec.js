"use strict";

const CDC = require("../../app/index/chartDataConverter.js");
const chartDataConverter = new CDC.ChartDataConverter();
const parsedData = [ {url: "github.com", duration: 2000}, {url: "bbc.com", duration: 2000} ]
const oddParsedData = [ {url: "github.com", duration: 2000}, {url: "bbc.com", duration: 2000}, {url: "reddit.com", duration: 2000} ]

describe("ChartDataConverter", function() {

  describe(".toColumn", function() {

    it("Converts data to {label: ,y:} format ", function() {
      expect(chartDataConverter.toColumn(parsedData)).toEqual([{label: "github.com", y: 2000}, {label: "bbc.com", y: 2000}]);
    });

  });

  describe(".convertToPie", function() {

    it("Converts data to {label: 'url' ,y: '%'} format ", function() {
      expect(chartDataConverter.convertToPie(parsedData)).toEqual([{label: "github.com", y: 50.00}, {label: "bbc.com", y: 50.00}]);
    });

    it("Converts duration correctly to two decimal places ", function() {
      expect(chartDataConverter.convertToPie(oddParsedData)).toEqual([{label: "github.com", y: 33.33}, {label: "bbc.com", y: 33.33}, {label: "reddit.com", y: 33.33} ]);
    });

  });

});
