/* global chrome  */

var currentUrl = "test";
var lastUpdatedTime = "";
var currentDate = new Date("1990-06-11T03:24:00");

function handleUpdate(url) {
<<<<<<< HEAD
  clearStorage();
  chrome.storage.sync.get({"allData": []}, function(result) {
    let allDataArray = result.allData;
    updateTime(allDataArray);
    currentUrl = url;
    if (allDataArray.every(function(el) { return el.url !== url } )) {
      allDataArray.push({ "url": url, "duration": 0 });
    };
    chrome.storage.sync.set({"allData": allDataArray});
  });
}
=======
  clearStorage()
  if (url !== "chrome://newtab/" && url !== (chrome.runtime.getURL("index.html"))) {
    chrome.storage.sync.get({"allData": []}, function(result) {
      let allDataArray = result.allData;
      updateTime(allDataArray);
      currentUrl = url;
      if (allDataArray.every(function(el) { return el.url !== url } )) {
        allDataArray.push({ "url": url, "duration": 0 });
      };
      chrome.storage.sync.set({"allData": allDataArray});
    });
  }
};
>>>>>>> development

function getTime() {
  return new Date();
}

function duration(timeNow, lastUpdatedTime) {
  return timeNow - lastUpdatedTime;
}

function updateTime(allDataArray) {
  if (!lastUpdatedTime) {
    lastUpdatedTime = getTime()
<<<<<<< HEAD
  } else {
    var dur = duration(getTime(), lastUpdatedTime);
=======
  }
  else {
    var dur = duration(getTime(), lastUpdatedTime)
>>>>>>> development
    allDataArray.forEach(function(element) {
      if (element.url === currentUrl) {
        element.duration += dur;
      }
    })
    lastUpdatedTime = getTime();
  };
}

function clearStorage() {
  let date = new Date()
  if ( currentDate.getDate() !== date.getDate() ) {
<<<<<<< HEAD
    chrome.storage.sync.clear();
    currentDate = date;
  };
=======
    chrome.storage.sync.clear()
    currentDate = date
  }
>>>>>>> development
}

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
