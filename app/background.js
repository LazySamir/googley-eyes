function getUrl() {

}

// define our event listeners
chrome.tabs.onActivated.addListener(getUrl);
