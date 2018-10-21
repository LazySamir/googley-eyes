function getLatestUrls() {
  chrome.storage.sync.get(null, function(data) {
    console.log(data['allData']);
    return data;
  })
}

function convertToHTML(urls) {
  // var urlArray = urls['allData']
  // var output = "<ul>"
  //
  // for(var i = 0; i < urlArray.length; i++) {
  //   output += `<li><div>${urlArray[i]['url']}</div></li>`
  // }
  // output += "</ul>"
  return urls
}

function injectHTML(string) {
  let result = document.getElementById("links-container")
  result.innerHTML = string;
}

let urls = getLatestUrls();
let string = convertToHTML(urls);
injectHTML(string);
