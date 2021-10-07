import React from 'react';
import marked from 'marked';

function Markdown({ type = 'div', children, ...props}) {

    // creates the markup
    const convertMarkdown = function(raw) {
        return { __html: marked(raw) };
    }

    // sets the markup inside an element
    return React.createElement(type, {dangerouslySetInnerHTML: convertMarkdown(children), ...props}, null);
};

export default Markdown;