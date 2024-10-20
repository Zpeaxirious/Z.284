document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is not focused');
    } else {
        console.log('Page is focused');
    }
});

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
    const knownPaths = ['/', '/about', '/contact', '/gallery', '/index', '/lore', '/music', '/privacy-policy', '/stream', '/terms-of-service', '/unsupported', '/vtuber'];
    if (!knownPaths.includes(window.location.pathname)) {
        window.location.href = '/404';
    }
});

/* document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Unload resources or stop processes
        stopAllProcesses();
        unloadResources();
        console.log('Resources unloaded and processes stopped');
    } else {
        // Reload resources or restart processes
        startAllProcesses();
        loadResources();
        console.log('Resources loaded and processes started');
    }
});

function stopAllProcesses() {
    // Add code to stop processes, e.g., stop animations, timers, etc.
}

function unloadResources() {
    // Add code to unload resources, e.g., remove event listeners, clear intervals, etc.
}

function startAllProcesses() {
    // Add code to restart processes
}

function loadResources() {
    // Add code to reload resources
} */