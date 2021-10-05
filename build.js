const fs = require('fs');
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

// build the blog posts
require("./build/posts.js");

// // location of blog posts
// const blogUrl = __dirname + '/blog/posts';

// // components
// const Index = require('./blog/components/pages/Index.js');

exports.buildPage = function buildPage(page, Component) {
    fs.writeFile(__dirname + '/dist/' + page + '.html', '<!DOCTYPE html>\n' + Component, function(err) {
        if(err) { console.error(err); return false }
        console.log('Build of ' + page + '.html successful');
        return true;
    });
};



// // build the static html pages
// buildPage('index', Index);
// buildPage('post', staticMarkup);