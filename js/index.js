// sets dark mode
function setDarkMode(dark) {
    let switched = false; // know if theme has changed
    if (dark && (localStorage.getItem('theme') === "light" || !localStorage.getItem('theme')) ) { // change to dark mode
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

document.getElementById('button-dark-mode').addEventListener('click', function() {
    setDarkMode(localStorage.getItem('theme') === "light")
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }