const fs = require('fs');
const minify = require('html-minifier').minify;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require("@babel/register");

// location where static content is published
const distLocation = __dirname + '/../dist';

// for creating directories if needed
const createDirectory = function(path) {
    const directory = path.replace(/\/([\w-]*)\.([\w]*)$/, '');
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

// create dist directory for js so that js build works
createDirectory(distLocation + '/js');
createDirectory(distLocation + '/css');

minifyOptions = {
    collapseWhitespace: true,
    conservativeCollapse: true,
    processScripts: ["application/ld+json"],
    minifyJS: true
};

exports.buildPage = function buildPage(path, content, type = "html") {
    path = path.charAt(0) !== "/" ? "/" + path : path; // add slash if needed
    let filepath = `${distLocation}${path}.${type}`; // the location for the file
    createDirectory(filepath); // create directory if needed
    // add html tag and minify if html
    content = type === "html" ? '<!DOCTYPE html>\n' + minify(content, minifyOptions) : content;
    // write the static file
    fs.writeFile(filepath, content, function(err) {
        if (err) { 
            console.error(err); 
            return false 
        }
        console.log(`Build of ${path}.${type} successful`);
        return true;
    });
};

// build blog pages e.g. custom 404
require("./pages.js");

// build the blog posts
require("./posts.js");