const React = require('react');
const ReactDOMServer = require('react-dom/server');
// components
import Main from '../Main';

// notify page
function Notify(props) {
    return (
        <Main {...props}>
            <div className="text-gray-900 bg-yellow-300 flex flex-col min-h-screen">
            </div>
            <script src="/js/index.min.js"></script>
        </Main>
    );
};

export default ReactDOMServer.renderToStaticMarkup(<Notify title="Join the waiting list" />);