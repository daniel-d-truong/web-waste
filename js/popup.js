chrome.storage.sync.get(['carbon'], (result) => {
  var countElement = document.getElementsByClassName("Count")[0];
  countElement.textContent = result.carbon;

  // Animation
  $({ Counter: 0 }).animate({
    Counter: $('.Count').text()
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.Count').text(Math.ceil(this.Counter));
    }
  });

  // Update the height of the cameo
  var canvas = document.getElementById("cameo");
  var updatedHeight = (result.carbon % 250) / 250 * 215;
  canvas.style.height = updatedHeight + 'px';

  // Update the count of the tree
  var treeCount = document.getElementById("treeCount");
  treeCount.textContent = (result.carbon) / 250;

  // Update the visibility of the donate message
  if( result.carbon >= 250 ){
      var donationSection = document.getElementById("donate");
      donationSection.style.visibility="visible";
  }
});

for (let i = 0; i < 2; i++) {
  let el = document.getElementsByClassName("icon").item(i);
  chrome.storage.sync.get(["youtube", "files"], (result) => {
    if (!!result["youtube"] && i == 0) {
      el.classList.toggle("selected");
    } 
    if (!!result["files"] && i == 1) {
      el.classList.toggle("selected");
    }
  })
  el.addEventListener("click", () => {
    el.classList.toggle("selected");
    if (i == 0) {
      let val = false;
      if (el.classList.contains("selected")) {
        val = true;
      }
      chrome.storage.sync.set({"youtube": val});
    }
    if (i == 1) {
      let val = false;
      if (el.classList.contains("selected")) {
        val = true;
      }
      chrome.storage.sync.set({"files": val});
    }
  });
  

}