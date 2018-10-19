function getUrl() {
}
// define our event listeners
chrome.tabs.onActivated.addListener(getUrl);

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});
