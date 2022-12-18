const checkbox = document.querySelector('#active');

chrome.storage.local
  .get(['active'])
  .then((result) => (checkbox.checked = result.active));

checkbox.addEventListener('change', () => {
  chrome.storage.local
    .get(['active'])
    .then((result) => {
      chrome.storage.local.set({ active: !result.active });
      checkbox.checked = !result.active;
    })
    .then(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currTab = tabs[0];
        if (currTab) {
          // Sanity check
          console.log(currTab.id);
          chrome.scripting.executeScript({
            target: { tabId: currTab.id },
            files: ['invert.js'],
          });
        }
      });
    });
});
