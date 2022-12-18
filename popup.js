const checkbox = document.querySelector('#active');
console.log('hi');

// Set checkbox value
chrome.storage.local.get(['active']).then((result) => {
  checkbox.checked = result.active;
});

// Update storage value on checkbox change
checkbox.addEventListener('change', () => {
  chrome.storage.local
    .get(['active'])
    .then((result) => {
      const newValue = !result.active;
      chrome.storage.local.set({ active: newValue });
      checkbox.checked = newValue;
    })
    .then(() => {
      // Insert/remove css properties based on new status
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currTab = tabs[0];
        if (currTab) {
          // Sanity check
          if (checkbox.checked) {
            chrome.scripting.insertCSS({
              files: ['invert-prog.css'],
              target: { tabId: currTab.id },
            });
          } else {
            chrome.scripting.removeCSS({
              files: [
                'invert-prog.css' /* , chrome.runtime.getURL('invert.css') */,
              ],
              target: { tabId: currTab.id },
            });
            chrome.scripting.executeScript({
              target: { tabId: currTab.id },
              files: ['removeInvert.js'],
            });
          }
        }
      });
    });
});
