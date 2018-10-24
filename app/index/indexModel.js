"use strict";

(function(exports) {
  function IndexModel(browser = chrome, urlParser = new UrlParser()) {
    this.browser = browser;
    console.log("constructor " + urlParser)
    this.urlParser = urlParser;
  }

  IndexModel.prototype.queryLocalStorage = function() {
    console.log("queryLocalStorage");
    this.browser.storage.sync.get(null, this.getData.bind(this))
  }

  IndexModel.prototype.getData = function(data) {
    console.log("getData");
    this.data = this.urlParser.mapAllData(data.allData)
    console.log("mapped data, model.data:");
    console.log(this.data);
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
