/* "permissions": ["activeTab"],
"host_permissions": ["<all_urls>"], */

console.log(chrome.runtime.getURL('invert.css'));

const head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
let link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('invert.css');

// Append link element to HTML head
head.appendChild(link);
