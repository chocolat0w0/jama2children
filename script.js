
var body = document.getElementsByTagName('body');
var image = document.createElement('img');
image.src = chrome.extension.getURL('images/test.jpg');
body[0].appendChild(image);