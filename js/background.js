chrome.tabs.onActivated.addListener(function(activeInfo) {
});

chrome.storage.sync.set({"youtube": false});
chrome.storage.sync.set({"files": false});