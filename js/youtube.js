chrome.storage.sync.get(["youtube"]), (result) => {
  if (result["youtube"]) {
    var video = document.getElementsByClassName("video-stream")[0];

    chrome.storage.local.set({carbon: 399}, () => {
      console.log("Value has been set to 399");
    });
    
    document.addEventListener('visibilitychange', () => {
      var state = document.visibilityState;
    
      if (!video.paused) {
        if (state == 'hidden') {
          video.pause();
        }
      }
    });
  }
}