const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
       './blog/components/**/*.{js,ts,jsx,tsx}', 
       './js/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                yellow: colors.yellow,
                gray: colors.gray
            },
            fontFamily: {
                sans: [
                'Poppins',
                ...defaultTheme.fontFamily.sans,
                ]
            },
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme('colors.gray.400', colors.gray[400]),
                        a: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        h1: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        h2: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        h3: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        h4: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        blockquote: {
                            color: theme('colors.gray.200', colors.gray[900]),
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.gray.700', colors.gray[700]),
                        }
                    }
                }
            })
        },
    },
    variants: {
        extend: {
            typography: ['dark']
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}