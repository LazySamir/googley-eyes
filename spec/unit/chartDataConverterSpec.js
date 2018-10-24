"use strict";

const CDC = require("../../app/index/chartDataConverter.js");
const chartDataConverter = new CDC.ChartDataConverter();
const parsedData = [ {url: "github.com", duration: 2000}, {url: "bbc.com", duration: 2000} ]

describe("ChartDataConverter", function() {

  describe(".toColumn", function() {

    it("Convert data to {label: ,y:} format ", function() {
      expect(chartDataConverter.toColumn(parsedData)).toEqual([{label: "github.com", y: 2000}, {label: "bbc.com", y: 2000}]);
    });
    
  });

});
