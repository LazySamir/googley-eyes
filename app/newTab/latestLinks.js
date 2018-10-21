(function(exports) {

  function getLatestUrls() {
    chrome.storage.sync.get(null, function(result) {
      convertToHTML(result.allData)
    });
  };

  function convertToHTML(allData) {
    let latest = allData.reverse();
    let output = "<ul>";
    for(let i = 0; i < 5; i++) {
      output += `<li><a href="${allData[i]['url']}">${first40Chars(allData[i]['url'])}</a></li>`
    }
    output += "</ul>";
    injectHTML(output);
  }

  function first40Chars(url) {
    if (url.length > 40) {
      url = url.slice(0, 37) + '...'
    }
    return url;
  }

  function injectHTML(output) {
    let container = document.getElementById("links-container")
    container.innerHTML = output;
  }

  exports.getLatestUrls = getLatestUrls;
})(this);

getLatestUrls();
