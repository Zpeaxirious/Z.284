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

const https = require('https');

https.get(`https://purge.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js`, () => {

});

/* anti screen recording */
let isRecording = false;

function turnScreenBlack() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'black';
}

function restoreScreen() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
}

// Detect screen recording
let isRecording = false;

function turnScreenBlack() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'black';
    document.body.querySelectorAll('*').forEach((element) => {
        element.style.backgroundColor = 'black';
        element.style.color = 'black';
    });
}

// Detect screen recording and screenshot attempts
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});