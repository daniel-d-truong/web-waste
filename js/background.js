chrome.downloads.onCreated.addListener((downloadedItem) => {
    //get data of downloaded file
    console.log("downloaded file");
    console.log(downloadedItem);

    chrome.storage.local.get(['carbon'], (result) => {
        var carbon = result.carbon ? result.carbon : 0;
        carbon += downloadedItem.fileSize;
        chrome.storage.local.set({carbon: carbon}, () => {
            console.log("we did it");
        });
    });
});