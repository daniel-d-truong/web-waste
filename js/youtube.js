var video = document.getElementsByClassName("video-stream")[0];

console.log("youtube.js is running");

document.addEventListener('visibilitychange', () => {
  var state = document.visibilityState;

  if (!video.paused) {
    if (state == 'hidden') {
      video.pause();
    }
  }
});
