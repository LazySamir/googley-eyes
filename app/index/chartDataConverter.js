"use strict";

(function(exports) {

  function ChartDataConverter(){};

  ChartDataConverter.prototype.toColumn = function(data) {
    let columnData = []
    data.forEach(function(el) {
      columnData.push({ label: el.url, y: el.duration })
    })
    return columnData
  };

  ChartDataConverter.prototype.convertToPie = function(data) {
    let pieData = []
    let totalDuration = 0
    data.forEach(function(el) {
      totalDuration += el.duration
    })

    data.forEach(function(el) {
      pieData.push({ label: el.url, y: toPercentage(totalDuration, el.duration) })
    })
    return pieData
  }

  function toPercentage(totalDuration, duration) {
    return  Math.round( (duration / totalDuration) * 1e2 );
  }

  exports.ChartDataConverter = ChartDataConverter;
})(this);
