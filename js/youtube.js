
var video = document.getElementsByClassName("video-stream")[0];

  chrome.storage.local.set({carbon: 399}, () => {
    console.log("Value has been set to 399");
  });
    
  document.addEventListener('visibilitychange', () => {
    chrome.storage.sync.get(["youtube"], (result) => {
      console.log(result);
      if (!!result["youtube"]) {
        var state = document.visibilityState;
        if (!video.paused) {
          if (state == 'hidden') {
            video.pause();
          }
        }
      }
    }
  )});