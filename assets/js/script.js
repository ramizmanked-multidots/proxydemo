(function () {
    'use strict';
    alert('Welcome to GitHub Pages!');

    const currentPath = window.location.pathname;
    const pathToRedirect = "/docs";  // Change this to your desired path
    const newURL = "https://example.com";     // Change this to your desired URL

    if (currentPath === pathToRedirect) {
        window.location.href = newURL;
    }
})();