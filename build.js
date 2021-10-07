const fs = require('fs');
const minify = require('html-minifier').minify;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require("@babel/register");

// location where static content is published
const distLocation = __dirname + '/dist/';

// for creating directories if needed
const createDirectory = function(path) {
    const directory = path.replace(/\/([\w-]*).html/, '');
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

// create dist directory for js so that js build works
createDirectory(distLocation + 'js');
createDirectory(distLocation + 'css');

minifyOptions = {
    collapseWhitespace: true,
    conservativeCollapse: true,
    processScripts: ["application/ld+json"],
    minifyJS: true
};

exports.buildPage = function buildPage(path, html) {
    let filepath = distLocation + path + '.html'; // the location for the file
    createDirectory(filepath); // create directory if needed
    fs.writeFile(filepath, '<!DOCTYPE html>\n' + minify(html, minifyOptions), function(err) {
        if (err) { 
            console.error(err); 
            return false 
        }
        console.log('Build of ' + path + '.html successful');
        return true;
    });
};

// build the blog posts
require("./build/posts.js");