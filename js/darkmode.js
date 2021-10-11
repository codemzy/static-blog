// sets dark mode
function setDarkMode(dark, preference) {
    let switched = false; // know if theme has changed
    if (dark) { // set dark mode
        // set as the theme if user overriding OS preference (remove theme setting if respecting OS preference)
        preference !== "dark" ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
        // change to dark mode
        document.body.classList.add('dark');
        // set switched so can update button svg
        switched = true;
    } else if (!dark && localStorage.getItem('theme') === "dark") { // remove dark mode
        // set as the theme if user overriding OS preference (remove theme setting if respecting OS preference)
        preference !== "light" ? localStorage.setItem('theme', 'light') : localStorage.removeItem('theme');
        // change to light mode
        document.body.classList.remove('dark');
        // set switched so can update button svg
        switched = true;
    }
    // if theme changed update the button by swapping hidden classes on svgs
    if (switched) {
        let currentIcon = document.querySelector('#button-dark-mode svg:not(.hidden)');
        let hiddenIcon = document.querySelector('#button-dark-mode svg.hidden');
        currentIcon.classList.add('hidden');
        hiddenIcon.classList.remove('hidden');
    }
};


// on load
window.onload = function () {
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true, preference);
    }
    document.getElementById('button-dark-mode').addEventListener('click', function() {
        setDarkMode(localStorage.getItem('theme') === "light", preference);
    });
};

// IMPORTANT
// this is a blocking script so that there's no flash of white when the blog loads (if set to dark mode) - don't add any custom JS here. 
// If you want to add your own js - add it in index.js instead and load it async at the bottom of the page it's needed
// e.g. <script src="/js/index.min.js" async></script>