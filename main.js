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
document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector(":root");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.dataset.theme = "dark";
    } else {
        root.dataset.theme = "light";
    }

    // If the user changes their preferred color scheme, update the CSS variables
    window.addEventListener("themechange", function () {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            root.dataset.theme = "dark";
        } else {
            root.dataset.theme = "light";
        }
    });
});


// Excerpt from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
function geoFindMe() {
    if (!navigator.geolocation){
        console.log("Geolocation isn't supported for your browser.");
        return;
    }
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        reverseGeocodingWithGoogle(latitude, longitude)
    }
    function error() {
        console.log("Unable to retrieve location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

fetch('https://extreme-ip-lookup.com/json/')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.country);
    })
.catch((data, status) => {
    console.log('Request failed');
})

document.getElementById('guess').innerText = moment.tz.guess();