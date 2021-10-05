const fs = require('fs');
const minify = require('html-minifier').minify;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require("@babel/register");

// create dist directory for js so that js build works
const dist = __dirname + '/dist';
if (!fs.existsSync(dist)){
    fs.mkdirSync(dist);
    fs.mkdirSync(dist + '/js');
    fs.mkdirSync(dist + '/css');
}

minifyOptions = {
    collapseWhitespace: true,
    conservativeCollapse: true,
    processScripts: ["application/ld+json"],
    minifyJS: true
};

exports.buildPage = function buildPage(path, html) {
    fs.writeFile(__dirname + '/dist/' + path + '.html', '<!DOCTYPE html>\n' + minify(html, minifyOptions), function(err) {
        if(err) { console.error(err); return false }
        console.log('Build of ' + path + '.html successful');
        return true;
    });
};

// build the blog posts
require("./build/posts.js");

// // location of blog posts
// const blogUrl = __dirname + '/blog/posts';

// // components
// const Index = require('./blog/components/pages/Index.js');



// // build the static html pages
// buildPage('index', Index);
// buildPage('post', staticMarkup);