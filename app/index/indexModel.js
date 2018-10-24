"use strict";

(function(exports) {
  function IndexModel(browser = chrome, urlParser = new UrlParser(), chartDataConverter = new ChartDataConverter()) {
    this.browser = browser;
    console.log("constructor" + urlParser)
    this.urlParser = urlParser
    this.chartDataConverter = chartDataConverter
  }

  IndexModel.prototype.getPieData = function(parsedData) {
    this.data = this.chartDataConverter.convertToPie(parsedData)
  }

  IndexModel.prototype.queryLocalStorage = function() {
    this.browser.storage.sync.get(null, this.getData.bind(this))
  }

  IndexModel.prototype.getData = function(data) {
    this.data = this.urlParser.mapAllData(data.allData)
  };

  IndexModel.prototype.convertDuration = function(milliseconds) {
    var seconds = milliseconds /1000;
    var hours = parseInt( seconds / 3600);
    seconds = seconds % 3600;

    var minutes = parseInt ( seconds / 60 );
    seconds = parseInt(seconds % 60);

    hours = this.addZero(hours);
    minutes = this.addZero(minutes);
    seconds = this.addZero(seconds);

    return `${hours}:${minutes}:${seconds}`
  }

  IndexModel.prototype.addZero = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  exports.IndexModel = IndexModel;
})(this)
