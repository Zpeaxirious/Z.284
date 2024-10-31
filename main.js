/* Check for supported paths */
window.addEventListener('load', function() {
    const knownPaths = ['/', '/about', '/contact', '/gallery', '/index', '/lore', '/music', '/privacy-policy', '/stream', '/terms-of-service', '/vtuber', '/404', '/m'];
    if (!knownPaths.includes(window.location.pathname) && window.location.pathname !== '/404') {
        window.location.href = '/404';
    }
});

/* Mobile Check */
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "./m";
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


/* Some Time Script */
document.addEventListener("DOMContentLoaded", function(event) {
    var address = document.querySelector('.address')
    if (!navigator.geolocation){
        console.log("Geolocation is not supported by your browser");
        ipLookup();
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        reverseGeocodingWithGoogle(longitude, latitude)
    }
    function error() {
        console.log("Unable to retrieve your location");
    }
    function ipLookup() {
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
            fallbackProcess(response)
    })
        .catch((data, status) => {
            address.innerText = 'We could not find your location'
        })
    }
    
    function reverseGeocodingWithGoogle(latitude, longitude) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?
        latlng=${latitude},${longitude}&key={GOOGLE_MAP_KEY}`)
        .then( res => res.json())
        .then(response => {
        processUserData(response)
    })
        .catch(status => {
        ipLookup()
    })
    }
    
    function processUserData(response) {
        address.innerText = response.results[0].formatted_address
    }
    
    function fallbackProcess(response) {
        address.innerText = `${response.city}, ${response.country}`
    }
    
    var localTime = jstz.determine().name();
    var serverTime = "Asia/Novosibirsk";
    document.querySelector('.server').innerText = new Date().toLocaleString("en-US", {timeZone: serverTime});
    document.querySelector('.local').innerText = new Date().toLocaleString("en-US", {timeZone: localTime});
});