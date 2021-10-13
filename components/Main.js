import React from 'react';
import { blogName, blogDescription, metaDescription } from '../settings/blog';
// components
import Nav from './Nav';
import Footer from './Footer';

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
                <script src="/js/darkmode.min.js"></script>
                { props.head }
            </head>
            <body className="flex flex-col min-h-screen text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <Nav />
                { props.children }
                <Footer />
            </body>
        </html>
    );
};

export default Main;