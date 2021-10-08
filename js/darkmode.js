// sets dark mode
function setDarkMode(dark) {
    let switched = false; // know if theme has changed
    if (dark) { // change to dark mode
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        switched = true;
    } else if (!dark && localStorage.getItem('theme') === "dark") { // change to light mode
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        switched = true;
    }
    // if theme changed update the button
    if (switched) {
        let currentIcon = document.querySelector('#button-dark-mode svg:not(.hidden)');
        let hiddenIcon = document.querySelector('#button-dark-mode svg.hidden');
        currentIcon.classList.add('hidden');
        hiddenIcon.classList.remove('hidden');
    }
};


// on load
window.onload = function () {
    if (localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
    }
    document.getElementById('button-dark-mode').addEventListener('click', function() {
        setDarkMode(localStorage.getItem('theme') === "light");
    });
};

// IMPORTANT
// this is a blocking script so that there's no flash of white when the blog loads (if set to dark mode) - don't add any custom JS here. 
// If you want to add your own js - add it in index.js instead and load it async at the bottom of the page it's needed
// e.g. <script src="/js/index.min.js" async></script>