var video = document.getElementsByClassName("video-stream")[0];

document.addEventListener('visibilitychange', () => {
  var state = document.visibilityState;

  if (!video.paused) {
    if (state == 'hidden') {
      video.pause();
    }
  }
});
