/* Iframe Project Feature */
document.addEventListener('visibilitychange', function() {
    const iframes = document.querySelectorAll('iframe');
    if (document.hidden) {
        iframes.forEach(iframe => {
            iframe.style.pointerEvents = 'none';
        });
        console.log('Iframes disabled');
    } else {
        iframes.forEach(iframe => {
            iframe.style.pointerEvents = 'auto';
        });
        console.log('Iframes enabled');
    }
});

/* Check for supported paths */
window.addEventListener('load', function() {
    const knownPaths = ['/', '/about', '/contact', '/gallery', '/index', '/lore', '/music', '/privacy-policy', '/stream', '/terms-of-service', '/vtuber', '/404'];
    if (!knownPaths.includes(window.location.pathname) && window.location.pathname !== '/404') {
        window.location.href = '/404';
    }
});

/* Mobile Check */
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "./404";
}

/* Anti-Dev */
document.addEventListener('keydown', function(event) {
    const keysToDisable = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F12', 'Delete', 'Insert', 'Pause', 'PrintScreen', 'Home', 'End', 'NumLock', 'Meta'];
    const numPadKeys = ['Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadDecimal', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'NumpadAdd', 'NumpadEnter', 'NumpadEqual'];
    if (keysToDisable.includes(event.key) || numPadKeys.includes(event.key) || event.key === 'Alt' || event.key === 'Control') {
        event.preventDefault();
    }
    if (event.key === 'AltGraph' || (event.key === 'Control' && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) || (event.key === 'Shift' && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT)) {
        event.preventDefault();
    }
});

$(document).ready(function(){
    $(document).on("contextmenu", function(e){
        e.preventDefault();
    });
});

const https = require('https');

https.get(`https://purge.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js`, () => {

});