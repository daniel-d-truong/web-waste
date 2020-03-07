chrome.storage.local.get(['carbon'], (result) => {
  var countElement = document.getElementsByClassName("Count")[0];

  countElement.textContent = result.carbon;

});
