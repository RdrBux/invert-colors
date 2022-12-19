const checkbox = document.querySelector('#active');

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
      chrome.tabs.query({ url: '*://*/*' }, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          if (checkbox.checked) {
            chrome.scripting.insertCSS({
              files: ['scripts/invert-prog.css'],
              target: { tabId: tabs[i].id },
            });
          } else {
            chrome.scripting.removeCSS({
              files: ['scripts/invert-prog.css'],
              target: { tabId: tabs[i].id },
            });
            chrome.scripting.executeScript({
              target: { tabId: tabs[i].id },
              files: ['scripts/removeInvert.js'],
            });
          }
        }
      });
    });
});
