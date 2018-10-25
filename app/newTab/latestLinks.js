"use strict";

(function(exports) {

  function LatestLinks(container, totalTime, browser = chrome) {
    this.container = container;
    this.totalTime = totalTime;
    this.browser = browser;
  }

  LatestLinks.prototype.getLatestUrls = function() {
    this.browser.storage.sync.get(null, this.convertToHTML.bind(this));
  };

  LatestLinks.prototype.convertToHTML = function(result) {
    let latestUrls = result.allData.reverse();
    let output = "<ul>";
    let loop = latestUrls.length;
    if ( loop >= 5 ) { loop = 5; }
    for(let i = 0; i < loop; i++) {
      output += `<li><a href="${latestUrls[i]["url"]}">${this.first40Chars(latestUrls[i]["url"])}</a></li>`;
    }
    output += "</ul>";
    this.injectHTML(output);
    this.injectTotalTime(latestUrls);
  };

  LatestLinks.prototype.first40Chars = function(url) {
    if (url.length > 40) {
      url = url.slice(0, 37) + "...";
    }
    return url;
  };

  LatestLinks.prototype.injectHTML = function(output) {
    this.container.innerHTML = output;
  };

  LatestLinks.prototype.injectTotalTime = function(allData) {
    let total = allData.reduce(function(acc, el) {
      acc += el.duration;
      return acc;
    }, 0);
    this.totalTime.innerHTML = convertDuration(total);
  };

  function convertDuration(milliseconds) {
    var seconds = milliseconds /1000;
    var hours = parseInt( seconds / 3600);
    seconds = seconds % 3600;
    var minutes = parseInt ( seconds / 60 );
    return `${hours} hour${convertString(hours)} and ${minutes} minute${convertString(minutes)}`;
  }

  function convertString(time) {
    if (time !== 1) {
      return "s";
    } else {
      return "";
    }
  }

  exports.LatestLinks = LatestLinks;
})(this);
