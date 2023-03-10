let active = null;
chrome.storage.local
  .get(['active'])
  .then((result) => {
    active = result.active;
  })
  .then(() => addInverter());

function addInverter() {
  if (active) {
    const head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    let link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL('scripts/invert.css');
    link.id = 'invert';

    // Append link element to HTML head
    head.appendChild(link);
  }
}
