"use strict";
const URL = require('url-parse');

(function(exports) {

  function UrlParser(){};

  UrlParser.prototype.parseUrl = function(url) {
    let parsedUrl = new URL(url);
    return parsedUrl.hostname;
  };

  exports.UrlParser = UrlParser;
})(this);
