import fs from 'fs';
import matter from 'gray-matter';
import isSameDay from 'date-fns/isSameDay';
import isBefore from 'date-fns/isBefore';
import formatRFC7231 from 'date-fns/formatRFC7231';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build';
// settings
import { blogDomain, blogPath, blogName, blogDescription, metaDescription, blogPagesLength } from '../settings/blog';
import categories from '../settings/categories';
import authors from '../settings/authors';

// components
import Post from '../components/blog/Post';
import List from '../components/blog/List';

// for storing a list of all the blog posts
let posts = [];

// fetch all the blog posts
fs.readdirSync(__dirname + '/../posts').forEach(filename => {
    const blogContent = fs.readFileSync(`${__dirname + '/../posts'}/${filename}`, "utf8");
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
        posts = posts.filter(function(post) {
            if (post.path === path) {
                if (isBefore(post.latestDate , latestDate)) {
                    return false;
                }
                discard = true; // the existing post in the array is newer so discard this post
            }
            return true;
        })
        // if the post is not discarded, add it to posts
        if (!discard) {
            posts.push({ path: path, latestDate: latestDate, data: data, content: content });
        }
    }
});

// map over posts array and create all the blog post pages
posts = posts.map(function(post) {
    post.path = `${blogPath}/${post.path}`; // add the blog path
    buildPage(post.path, ReactDOMServer.renderToStaticMarkup(<Post {...post.data} path={post.path} content={post.content} />));
    return { path: post.path, date: post.latestDate, ...post.data }; // don't need the content anymore just the data
});

// sort the posts array in date order
posts = posts.sort(function(a, b) {
    return isBefore(b.date, a.date) ? -1 : isBefore(a.date, b.date) ? 1 : 0;
});

// create list pages
const buildListPages = function({category, author, list}) {
    let page = 1;
    let pageList = [];
    let pages = Math.ceil(list.length/blogPagesLength);
    let getPath = function(page) {
        return `${blogPath}/${category ? `${category}/` : author ? `author/${author}/` : ''}` + `${page > 1 ? "page/" : ''}` + `${page === 1 ? "index" : page}`
    };
    let getProps = function(currentPage, list) {
        return {
            category: category,
            author: author,
            pages: pages,
            page: currentPage,
            posts: list,
            path: getPath(currentPage),
            title: `${category ? categories[category].name : author ? authors[author].name : "All Posts"}${ page > 1 ? ` - Page ${currentPage} of ${pages}` : ""}`,
            description: category ? categories[category].metaDescription || categories[category].description : 
                author ? authors[author].metaDescription || authors[author].description : false
        };
    };
    list.map(function(post, i) {
        if (pageList.length === blogPagesLength) {
            // build the page
            buildPage(getPath(page), ReactDOMServer.renderToStaticMarkup(<List {...getProps(page, pageList)} />));
            pageList = []; // empty pageList
            page++; // next page number
        }
        pageList.push(post);
    });
    // final page
    buildPage(getPath(page), ReactDOMServer.renderToStaticMarkup(<List {...getProps(page, pageList)} />));
};

// create blog pages
buildListPages({ list: posts });

// posts sorted by category
let postsByCategory = posts.reduce(function(acc, post) {
    let key = post.categoryId;
    if (!acc[key]) {
        acc[key] = []; // create the key if it doesn't exist
    }
    acc[key].push(post); // add the post to the category
    return acc;
}, {});

// create category pages
for (let categoryId in postsByCategory) {
    if (categories[categoryId]) {
        buildListPages({ category: categoryId, list: postsByCategory[categoryId]});
    } else {
        console.warn(`The category ${categoryId} hasn't been added the category settings, but has been added to a post. See settings/categories.`)
    }
};

// posts sorted by author
let postsByAuthor = posts.reduce(function(acc, post) {
    let key = post.authorId;
    if (key) {
        if (!acc[key]) {
            acc[key] = []; // create the key if it doesn't exist
        }
        acc[key].push(post); // add the post to the author
    }
    return acc;
}, {});

// create author pages
for (let authorId in postsByAuthor) {
    if (authors[authorId]) {
        buildListPages({ author: authorId, list: postsByAuthor[authorId]});
    } else {
        console.warn(`The author ${authorId} hasn't been added the author settings, but has been added to a post. See settings/authors.`)
    }
};

// create RSS feed of 20 most recent posts
let xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
    <title>{blogName} RSS Feed</title>
    <link>${blogDomain}${blogPath}</link>
    <description>${blogName} rss feed. ${metaDescription || blogDescription}</description>
    ${ posts.slice(0, 20).map(function(post, i) { 
    return (
    `<item>
        <title>${post.title}</title>
        <link>${blogDomain}${post.path}</link>
        <guid>${blogDomain}${post.path}</guid>
        <pubDate>${formatRFC7231(new Date(post.date))}</pubDate>
        <description>${post.description}</description>
    </item>
    `);
    }).join("").trimEnd() }
</channel>
</rss>`;
buildPage(`${blogPath}/rss`, xmlContent, 'xml');