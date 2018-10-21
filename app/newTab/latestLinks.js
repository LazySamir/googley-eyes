(function(exports) {

  function LatestLinks() {};

  LatestLinks.prototype.getLatestUrls = function() {
    chrome.storage.sync.get(null, function(result) {
      this.convertToHTML(result.allData)
    });
  };

  LatestLinks.prototype.convertToHTML = function(allData) {
    let latest = allData.reverse();
    let output = "<ul>";
    for(let i = 0; i < 5; i++) {
      output += `<li><a href="${allData[i]['url']}">${first40Chars(allData[i]['url'])}</a></li>`
    }
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
    let container = document.getElementById("links-container")
    container.innerHTML = output;
  }

  exports.LatestLinks = LatestLinks;
})(this);
