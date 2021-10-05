const React = require('react');
const ReactDOMServer = require('react-dom/server');
// components
import Main from '../Main';
import Nav from '../Nav';
// svg
import { CheckIcon } from '../svg/Icons';

// homepage component
function Index(props) {
    return (
        <Main {...props}>
            <div className="text-gray-900 flex flex-col min-h-screen">
                <Nav />
                <div className="container max-w-5xl mx-auto p-10 py-5 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-10 leading-snug md:leading-snug">Want to be up and running in seconds? This is your first page, called <span className="underline decoration-yellow">Index.js</span> in the pages directory.</h1>
                </div>
            </div>
        </Main>
    );
};

export default Index;