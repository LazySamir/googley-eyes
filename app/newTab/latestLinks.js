(function(exports) {

  function LatestLinks(container, browser = chrome) {
    this.container = container;
    this.browser = browser;
  };

  LatestLinks.prototype.getLatestUrls = function() {
    this.browser.storage.sync.get(null, this.convertToHTML.bind(this));
  };

  LatestLinks.prototype.convertToHTML = function(result) {
    let latestUrls = result.allData.reverse();
    let output = "<ul>";
    let loop = latestUrls.length;
    if ( loop >= 5 ) { loop = 5 };
    for(let i = 0; i < loop; i++) {
      output += `<li><a href="${latestUrls[i]['url']}">${this.first40Chars(latestUrls[i]['url'])}</a></li>`
    };
    output += "</ul>";
    this.injectHTML(output);
  }

  LatestLinks.prototype.first40Chars = function(url) {
    if (url.length > 40) {
      url = url.slice(0, 37) + '...'
    }
    return url;
  }

  LatestLinks.prototype.injectHTML = function(output) {
    this.container.innerHTML = output;
  }

  exports.LatestLinks = LatestLinks;
})(this);
