
var video = document.getElementsByClassName("video-stream")[0];
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
