"use strict";

(function(exports) {

  function ChartDataConverter(){};

  ChartDataConverter.prototype.toColumn = function(data) {
    let columnData = []
    data.forEach(function(el) {
      columnData.push({ label: el.url, y: el.duration })
    })
    console.log(columnData);
    return columnData
  };

  exports.ChartDataConverter = ChartDataConverter;
})(this);
