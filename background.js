chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['invert.css'],
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting
      .insertCSS({
        target: { tabId: tabId },
        files: ['invert.css'],
      })
      .then(() => {
        console.log('INJECTED INVERT');
      })
      .catch((err) => console.log(err));
  }
});
