const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require("@babel/register");
const buildPost = require('./build/posts.js');

// create dist directory for js so that js build works
const dist = __dirname + '/dist';
if (!fs.existsSync(dist)){
    fs.mkdirSync(dist);
    fs.mkdirSync(dist + '/js');
    fs.mkdirSync(dist + '/css');
}

// location of blog posts
const blogUrl = __dirname + '/blog/posts';

// components
const Index = require('./blog/components/pages/Index.js');

const staticMarkup = buildPost({ title: "Testing a title from build"});

console.log(staticMarkup);
console.log(Index);

const buildPage = function(page, Component) {
    fs.writeFile(__dirname + '/dist/' + page + '.html', '<!DOCTYPE html>\n' + Component.default, function(err) {
        if(err) { console.error(err); return false }
        console.log('Build of ' + page + '.html successful');
        return true;
    });
};



// build the static html pages
buildPage('index', Index);
buildPage('post', staticMarkup);