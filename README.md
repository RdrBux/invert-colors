# EASY COLOR INVERTER

#### Video Demo: <URL HERE>

#### Description:

Easy Color Inverter is a Google Chrome extension that allows users to invert the colors of all the components of any website while keeping original images and videos.

#### Idea:

The idea arises from the discomfort felt when navigating at night in places with predominantly light colors. Which leads to feeling eye strain.
At the same time, I personally consider uncomfortable to read articles with very dark backgrounds from the computer.

#### Project explanation

All Google extensions require a file called manifest.json, which has basic information about the extension, also about actions, scripts and required permissions.

###### Images folder

Contains the main logo in different sizes. It is a pixel-art style handcrafted drawing representing the sun and the moon due to its usual link with the light/dark modes on software applications.

###### Pop-up

Files called Popup work similarly to a web page, which opens when clicking the extension button. The .HTML file contains the initial structure of the app, while the .CSS improves its appearance and the .JS acts listening to the changes in the main button and running scripts as relevant.

###### Scripts folder

The main action happens in these files. The two CSS files contain the properties that modify the appearance of the websites, their name varies by the insertion method.
Invert.js is a script that runs automatically when starting a tab in Chrome. Its execution is conditional on the value of a variable stored in the browser's local storage. When the value is true, the "head" element of the tab's html code is accessed and the invert.css file is added to it as a child.
The remaining script called removeInvert.js is executed when the user disables the plugin functionality in the popup menu. And its purpose is to disable the previously inserted CSS file (if it exists) in each open tab.

#### Installation

At the time of this publication. The extension is not available in the Chrome Web Store, its use requires a local installation.
