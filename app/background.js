function HandleUpdate(tabId, changeInfo) {
  console.log(changeInfo.url);
  chrome.storage.sync.get({allData: []}, function(result) {
    var allDataArray = result.allData;
    allDataArray.push({ url: changeInfo.url });
    chrome.storage.sync.set({allData: allDataArray}, function() {
      chrome.storage.sync.get("allData", function(result) {})
      console.log(result.allData);
    })
  })
};

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  HandleUpdate(tabId, changeInfo);
});
