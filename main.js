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
    const knownPaths = ['/', '/about', '/contact', '/gallery', '/index', '/lore', '/music', '/privacy-policy', '/stream', '/terms-of-service', '/unsupported', '/vtuber', '/404'];
    if (!knownPaths.includes(window.location.pathname) && window.location.pathname !== '/404') {
        window.location.href = '/404';
    }
});