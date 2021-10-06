const fs = require('fs');
const matter = require('gray-matter');
import isSameDay from 'date-fns/isSameDay';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// component
import Post from '../blog/components/post/Post';

import {buildPage} from '../build';

// get all the blog posts
fs.readdirSync(__dirname + '/../blog/posts').forEach(filename => {
    const blogContent = fs.readFileSync(`${__dirname + '/../blog/posts'}/${filename}`, "utf8");
    const {data, content} = matter(blogContent);
    const [date, path, ext] = filename.split(/[_.]/);
    data.published = new Date(data.published);
    data.updated = data.updated ? new Date(data.updated) : false;
    // validate the file
    if (!date || !path || !ext || ext !== "md") { // check the filename structure
        console.error(`The blog post file ${filename} is the wrong format use YYYY-MM-DD_the-blog-path.md`);
    } else if (!isSameDay(new Date(date), data.updated ? data.updated : data.published )) { // check the dates match
        console.error(`The filename date for ${filename} is incorrect, must be the same day as the ${data.updated ? "updated" : "published"} date.`)
    }
    buildPage(path, ReactDOMServer.renderToStaticMarkup(<Post {...data} content={content} />));
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