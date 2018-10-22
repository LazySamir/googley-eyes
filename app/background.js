var currentUrl = "test"
var lastUpdatedTime = ""

function handleUpdate(url) {
  console.log(url);
  console.log(currentUrl);
  chrome.storage.sync.get({"allData": []}, function(result) {
    console.log("data retrieved");
    console.log(result.allData);
    let allDataArray = result.allData;
    updateTime(allDataArray);
    currentUrl = url;
    if (allDataArray.every(function(el) { return el.url !== url } )) {
      console.log(allDataArray.length)
      allDataArray.push({ "url": url, "duration": 0 });
      console.log("updated array");
      console.log(allDataArray);
      chrome.storage.sync.set({"allData": allDataArray});
    };
  });
};

function getTime() {
  return new Date()
}

function duration(timeNow, lastUpdatedTime) {
  return timeNow - lastUpdatedTime;
}

function updateTime(allDataArray) {
  if (!lastUpdatedTime) { // if lastUpdatedTime is null (this is the first url visited)
    lastUpdatedTime = getTime() // set lastUpdatedTime to current time
    console.log(lastUpdatedTime)
  }
  else { // if lastUpdatedTime has a value
    console.log(lastUpdatedTime)
    var dur = duration(getTime(), lastUpdatedTime) // calc the duration, then:
      console.log(allDataArray)

    allDataArray.forEach(function(element) {
      console.log("Im here")
      if (element.url === currentUrl) {
        console.log(element.url + element.duration)
        console.log(dur)
        element.duration += dur
      }
    })

  //  allDataArray.push({ "duration": duration }); //code to enter the duration into the data store
    lastUpdatedTime = getTime() // set the lastUpdatedTime to current time
  }
}

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(!!changeInfo.url) {
    handleUpdate(changeInfo.url);
    //updateTime();
  };


});
