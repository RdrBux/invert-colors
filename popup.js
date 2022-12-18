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
      chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          if (checkbox.checked) {
            chrome.scripting.insertCSS({
              files: ['invert-prog.css'],
              target: { tabId: tabs[i].id },
            });
          } else {
            chrome.scripting.removeCSS({
              files: [
                'invert-prog.css' /* , chrome.runtime.getURL('invert.css') */,
              ],
              target: { tabId: tabs[i].id },
            });
            chrome.scripting.executeScript({
              target: { tabId: tabs[i].id },
              files: ['removeInvert.js'],
            });
          }
        }
      });
    });
});
