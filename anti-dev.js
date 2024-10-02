document.addEventListener('keydown', function(event) {
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73)) {
        event.preventDefault();
    }
});


const https = require('https');

https.get(`https://purge.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js`, () => {

});