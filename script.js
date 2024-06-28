document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('homeLink');
    var updatedHref = link.getAttribute('href').replace('.html', '');
    link.setAttribute('href', updatedHref);
});