import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Post from '../blog/components/post/Post';

const buildPost = function(content) {
    return ReactDOMServer.renderToStaticMarkup(<Post title={content.title} />)
};

//  export default staticMarkup;
module.exports = buildPost;