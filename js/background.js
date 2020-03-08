chrome.downloads.onCreated.addListener((downloadedItem) => {
    //get data of downloaded file
    console.log("downloaded file");
    console.log(downloadedItem);

    chrome.storage.local.get(['lastdownloaded'], (link) => {
        console.log(link.lastdownloaded);
        console.log(downloadedItem.url);
        if (!link) {

            console.log("link is null?")
            chrome.storage.local.get(['carbon'], (result) => {
                var carbon = result.carbon ? result.carbon : 0;
                carbon += downloadedItem.fileSize;
                chrome.storage.local.set({ carbon: carbon }, () => {
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
                chrome.storage.local.get(['carbon'], (result) => {
                    var carbon = result.carbon ? result.carbon : 0;
                    carbon += downloadedItem.fileSize;
                    chrome.storage.local.set({ carbon: carbon }, () => {
                        console.log("we did it");
                    });
                });
            }


        }
        chrome.storage.local.set({ lastdownloaded: downloadedItem.url }, () => {
            console.log("last url set");
        });
    });

});