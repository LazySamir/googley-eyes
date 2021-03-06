"use strict";

(function(exports) {

  function UrlParser(){}

  UrlParser.prototype.mapAllData = function(allData) {
    let mappedData = allData.map( item => parseUrl(item));
    let reducedData = mappedData.reduce(reduceData, []);
    return reducedData;
  };

  function parseUrl(url) {
    let parsedUrl = new URL(url["url"]);
    return { url: parsedUrl.hostname, duration: url["duration"] };
  }

  function reduceData(acc, obj) {
    if ( acc.every(function(el) { return el.url !== obj.url; }) ) {
      acc.push({ url: obj.url , duration: obj.duration });
    } else {
      let result = acc.find(function(accObj) { return accObj.url === obj.url; });
      result.duration += obj.duration;
    }
    return acc;
  }

  exports.UrlParser = UrlParser;
})(this);
