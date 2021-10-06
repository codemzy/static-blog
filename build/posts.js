const fs = require('fs');
const matter = require('gray-matter');
import isSameDay from 'date-fns/isSameDay';
import isBefore from 'date-fns/isBefore';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
import {buildPage} from '../build';

// components
import Post from '../blog/components/post/Post';
import List from '../blog/components/post/List';

// for storing a list of all the blog posts
const posts = [];

// fetch all the blog posts
fs.readdirSync(__dirname + '/../blog/posts').forEach(filename => {
    const blogContent = fs.readFileSync(`${__dirname + '/../blog/posts'}/${filename}`, "utf8");
    const {data, content} = matter(blogContent);
    const [date, path, ext] = filename.split(/[_.]/);
    data.published = new Date(data.published);
    data.updated = data.updated ? new Date(data.updated) : false;
    let latestDate = data.updated ? data.updated : data.published; // the most recent date for the post (published or update)
    // validate the file
    if (!date || !path || !ext || ext !== "md") { // check the filename structure
        console.error(`The blog post file ${filename} is the wrong format use YYYY-MM-DD_the-blog-path.md`);
    } else if (!isSameDay(new Date(date), latestDate )) { // check the dates match
        console.error(`The filename date for ${filename} is incorrect, must be the same day as the ${data.updated ? "updated" : "published"} date.`)
    } else if (isBefore(latestDate, new Date()) || process.env.PREVIEW) { // if the post is ready to be published
        // check if the post is already in the array
        let discard = false; // if newer version exists we will discard this post
        let filtered = posts.filter(function(post) {
            if (post.path === path) {
                if (isBefore(post.latestDate , latestDate)) {
                    return false;
                }
                discard = true; // the existing post in the array is newer so discard this post
            }
            return true;
        })
        posts.push({ path: path, lastestDate: lastestDate, ...data, content: content });
        buildPage(path, ReactDOMServer.renderToStaticMarkup(<Post {...data} content={content} />));
    }
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