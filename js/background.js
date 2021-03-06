const gramsCarbonPerMB = 1.219;
const bytesPerMB = 1000000;

chrome.downloads.onCreated.addListener((downloadedItem) => {
    //get data of downloaded file
    console.log("downloaded file");
    console.log(downloadedItem);

    chrome.storage.sync.get(['lastdownloaded', 'files'], (link) => {
        console.log(link.lastdownloaded);
        console.log(downloadedItem.url);

            if (!link) {
                console.log("link is null?")
                chrome.storage.sync.get(['carbon'], (result) => {
                    var carbon = result.carbon ? result.carbon : 0;
                    carbon += (downloadedItem.fileSize / bytesPerMB) * gramsCarbonPerMB;
                    chrome.storage.sync.set({ carbon: carbon }, () => {
                        console.log("we did it");
                    });
                });
            } else {
                console.log("yay");
                if (link.lastdownloaded === downloadedItem.url) {
                    console.log("cancelled download");
                    chrome.downloads.cancel(downloadedItem.id);
                    if (downloadedItem.state == "complete") {
                        chrome.downloads.removeFile(item.id);
                    }
                } else {
                    chrome.storage.sync.get(['carbon'], (result) => {
                        var carbon = result.carbon ? result.carbon : 0;
                        carbon += (downloadedItem.fileSize / bytesPerMB) * gramsCarbonPerMB;
                        chrome.storage.sync.set({ carbon: carbon }, () => {
                            console.log("we did it");
                        });
                    });
                }
    
    
            }
            chrome.storage.sync.set({ lastdownloaded: downloadedItem.url }, () => {
                console.log("last url set");
            });
    });
});

chrome.storage.sync.set({"youtube": false});
chrome.storage.sync.set({ "files": false });