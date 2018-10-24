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

// function dataToPieChart(data) {
//    // convert from
//      { url: "www.google.com", duration: 100},
//      { url: "www.bbc.com", duration: 200 }
//    // to
//     { label: "www.google.com", y: 33.33 },
//     { label: "www.bbc.com", y: 66.66 }
//   ]
//   // Requires, convert duration to %
//   // return new array with formatted content
// }

// IndexModel.prototype.dataToColumnChart = function() {
//   let columnData = []
//   data.forEach(function(el)) {
//     columnData.push { label: el.url, y: el.duration }
//   }
//   console.log(columnData);
//   return columnData
// }
