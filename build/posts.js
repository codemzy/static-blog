const fs = require('fs');
const matter = require('gray-matter');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
import Post from '../blog/components/post/Post';

import {buildPage} from '../build';

// get all the blog posts
fs.readdirSync(__dirname + '/../blog/posts').forEach(filename => {
    const blogContent = fs.readFileSync(`${__dirname + '/../blog/posts'}/${filename}`, "utf8");
    const {data, content} = matter(blogContent);
    console.log(data, content);
    buildPage("a-blog-post", ReactDOMServer.renderToStaticMarkup(<Post {...data} content={content} />));
});


// buildPage("a-blog-post", ReactDOMServer.renderToStaticMarkup(<Post title={content.title} />));

// exports.buildPost = function(content) {
//     buildPage("a-blog-post", ReactDOMServer.renderToStaticMarkup(<Post title={content.title} />));
// };

// exports.buildPost = function(content) {
//     return ReactDOMServer.renderToStaticMarkup(<Post title={content.title} />)
// };

// exports.staticPage = async function(content) {
//     let Index = await import('../blog/components/pages/Index');
//     return ReactDOMServer.renderToStaticMarkup(<Index title={content.title} />)
// };