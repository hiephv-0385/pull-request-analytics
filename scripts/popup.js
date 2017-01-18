// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('issue').textContent = info.issue;
  document.getElementById('totalComments').textContent = info.commentCount;
  document.getElementById('author').textContent = info.author;
  document.getElementById('totalComments').textContent = info.commentCount;
  document.getElementById('changedCode').textContent = info.numberOfChangedCode;
  document.getElementById('changedFiles').textContent = info.changedFiles;
  document.getElementById('ratio').textContent = info.commentsPerchangedLineCode;
}

window.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        setDOMInfo);
  });
});
