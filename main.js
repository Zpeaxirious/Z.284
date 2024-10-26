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

/* Anti Keys*/
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

/* Theme Project */
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}

/**/
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--text', '#ecd1f5');
        root.style.setProperty('--background', '#000000');
        root.style.setProperty('--primary', '#e222cf');
        root.style.setProperty('--secondary', '#240020');
        root.style.setProperty('--accent', '#c200a5');
    } else {
        root.style.setProperty('--text', '#250a2e');
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--primary', '#dd1dca');
        root.style.setProperty('--secondary', '#ffdbfb');
        root.style.setProperty('--accent', '#ff3de2');
    }
}

// Initial theme application based on system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(prefersDarkScheme ? 'dark' : 'light');

// Listen for changes in system theme and update accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    applyTheme(e.matches ? 'dark' : 'light');
});
