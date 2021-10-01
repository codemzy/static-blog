const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
       './website/components/**/*.{js,ts,jsx,tsx}', 
       './website/js/**/*.{js,ts,jsx,tsx}',
    //    './app/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: colors.yellow
            },
            fontFamily: {
                sans: [
                'Poppins',
                ...defaultTheme.fontFamily.sans,
                ]
            }
        },
    },
    plugins: [],
}