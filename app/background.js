function handleUpdate(url) {
  console.log(url);
  chrome.storage.sync.get({"allData": []}, function(result) {
    console.log("data retrieved");
    console.log(result.allData);
    let allDataArray = result.allData;
    if (allDataArray.every(function(el) { return el.url !== url } )) {
      allDataArray.push({ "url": url });
      console.log("updated array");
      console.log(allDataArray);
      chrome.storage.sync.set({"allData": allDataArray});
    };
  });
};

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(!!changeInfo.url) {
    handleUpdate(changeInfo.url);
  };
});

chrome.tabs.onActivated.addListener(function(current) {
  chrome.tabs.get(current.tabId, function(tab) {
   handleUpdate(tab.url);
  });
});
