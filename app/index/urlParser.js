"use strict";
const URL = require('url-parse');

(function(exports) {

  function UrlParser(){};

  UrlParser.prototype.mapAllData = function(allData) {
    let mappedData = allData.map( item => parseUrl(item));
    let reducedData = mappedData.reduce(reduceData, []);
    return reducedData;
  };

  function parseUrl(url) {
    let parsedUrl = new URL(url['url']);
    return { url: parsedUrl.hostname, duration: url['duration'] };
  }

  function reduceData(acc, obj) {
    if ( acc.every(function(el) { return el.url !== obj.url }) ) {
     console.log("item does not already exist");
     acc.push({ url: obj.url , duration: obj.duration })
   } else {
     console.log("item already exists in acc array");
     let result = acc.find(function(accObj) { return accObj.url === obj.url });
     console.log(result);
     result.duration += obj.duration;
     console.log(result);
   }
    console.log(acc);
    return acc;
  }

  exports.UrlParser = UrlParser;
})(this);
