const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
       './components/**/*.{js,ts,jsx,tsx}', 
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
                DEFAULT: {
                    css: {
                        blockquote: {
                            color: theme('colors.gray.900', colors.gray[900]),
                            backgroundColor: theme('colors.gray.50', colors.gray[50]),
                            borderLeftWidth: '0',
                            borderRadius: '.375rem',
                            quotes: null,
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                            paddingTop: '.5rem',
                            paddingBottom: '.5rem',
                            position: 'relative',
                            marginLeft: '1.25rem',
                            fontFamily: 'Georgia,Times New Roman,Times,serif',
                        },
                        'blockquote::before': {
                            position: 'absolute',
                            marginTop: '-20px',
                            marginLeft: '-50px',
                            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='30px' fill='${theme('colors.gray.700', colors.gray[700]).replace('#', '%23')}'%3E%3Cpath d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E")`
                        },
                        'blockquote p:first-of-type::before': {
                            content: '',
                        },
                        'blockquote p:last-of-type::after': {
                            content: '',
                        },
                        'figure figcaption': {
                            textAlign: 'right',
                            marginLeft: '.5rem',
                            marginRight: '.5rem',
                        },
                        img: {
                            borderRadius: '.375rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        },
                        '.video-container': {
                            borderRadius: '.375rem',
                        },
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: '2rem',
                        },
                    },
                },
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
                        strong: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        code: {
                            color: theme('colors.gray.200', colors.gray[200]),
                        },
                        blockquote: {
                            color: theme('colors.gray.200', colors.gray[900]),
                            backgroundColor: theme('colors.gray.800', colors.gray[800]),
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.gray.700', colors.gray[700]),
                        },
                        img: {
                            filter: `brightness(75%)`
                        },
                    }
                }
            })
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
            textDecoration: ['group-focus'],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}