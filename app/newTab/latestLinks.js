function getLatestUrls() {
  chrome.storage.sync.get(null, function(data) {
    return data;
  })
}

function convertToHTML(urls) {
  var urlArray = this.model.data['allData']
  var output = "<ul>"

  for(var i = 0; i < urlArray.length; i++) {
    output += `<li><div>${urlArray[i]['url']}</div></li>`
  }
  output += "</ul>"
  return output
}

function injectHTML(string) {
  let result = document.getElementById("links-container")
  result.htmlElement.innerHTML = string;
}

let urls = getLatestUrls();
let string = convertToHTML(urls);
injectHTML(string);
