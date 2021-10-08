import React from 'react';
import { blogName, blogDescription, metaDescription } from '../settings/blog';

// main component
function Main({ title, description, ...props }) {
    return (
        <html lang="en">
            <head>
                <title>{ title ? `${title} - ${blogName}` : blogName }</title>
                <meta charSet="utf-8" />
                <meta name="description" content={ description || metaDescription || blogDescription } />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link href="/css/styles.min.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                { props.children }
                <script src="/js/index.min.js" async></script>
            </body>
        </html>
    );
};

export default Main;