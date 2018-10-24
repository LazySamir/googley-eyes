"use strict";

const CDC = require("../../app/index/chartDataConverter.js");
const chartDataConverter = new CDC.ChartDataConverter();
const parsedData = [ {url: "github.com", duration: 2000}, {url: "bbc.com", duration: 2000}, {url: "facebook.com", duration: 2000}]

describe("ChartDataConverter", function() {

  describe(".toColumn", function() {

    it("Convert data to {label: ,y:} format ", function() {
      expect(chartDataConverter.toColumn(parsedData)).toEqual([{label: "github.com", y: 2000}, {label: "bbc.com", y: 2000}, {label: "facebook.com", y: 2000}]);
    });

  });

  describe(".convertToPie", function() {
    it("Converts duration to percentage of total", function(){
      expect(chartDataConverter.convertToPie(parsedData)).toEqual([{label: "github.com", y: 33.33}, {label: "bbc.com", y: 33.33}, {label: "facebook.com", y: 33.33}]);
    });
  });

});
