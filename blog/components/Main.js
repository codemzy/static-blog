const React = require('react');

const defaultTitle = 'React Static - Simple static html creation with React.js and Tailwind.';
// main component
function Main({ title = defaultTitle, ...props }) {
    return (
        <html lang="en">
            <head>
                <title>{ title !== defaultTitle ? `${title} - React Static` : title }</title>
                <meta charSet="utf-8" />
                <meta name="description" content={ props.description || "This is a default description that I came up with all by myself. Make sure you change it. "} />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link href="/css/styles.min.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                { props.children }
            </body>
        </html>
    );
};

export default Main;