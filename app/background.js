function HandleUpdate(url) {
  console.log(url);
    chrome.storage.sync.get({allData: []}, function(result) {
      console.log("data retrieved");
      console.log(result.allData);
      var allDataArray = result.allData;
      allDataArray.push({ url: url });
      console.log("updated array");
      console.log(allDataArray);
      chrome.storage.sync.set({allData: allDataArray}, function() {
        chrome.storage.sync.get("allData", function(result) {
          console.log(result.allData);
        });
      });
    });
};

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("ive fired");
  if(!!changeInfo.url) {
    console.log(changeInfo);
    HandleUpdate(changeInfo.url);
  }
});
