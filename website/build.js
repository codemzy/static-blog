const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require("@babel/register");

// create dist directory for js so that js build works
const dist = __dirname + '/../dist';
if (!fs.existsSync(dist)){
    fs.mkdirSync(dist);
    fs.mkdirSync(dist + '/js');
    fs.mkdirSync(dist + '/css');
}

// components
const Index = require('./components/pages/Index.js');
const Notify = require('./components/pages/Notify.js');

const buildPage = function(page, Component) {
    fs.writeFile(__dirname + '/../dist/' + page + '.html', '<!DOCTYPE html>\n' + Component.default, function(err) {
            if(err) { console.error(err); return false }
            console.log('Build of ' + page + '.html successful');
            return true;
        });
};

// build the static html pages
buildPage('index', Index);
buildPage('notify', Notify);