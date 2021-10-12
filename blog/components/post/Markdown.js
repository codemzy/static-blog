import React from 'react';
import marked from 'marked';

const renderer = {
    blockquote(quote) {
        let match = quote.match(/(?<quote>[\w\W]+)?(?:<p>-- (?<caption>[^-]+)(?:- (?<cite>.*))?<\/p>)/m);
        if (!match || !match.groups) {
            return `<blockquote>${quote}</blockquote>`;
        } else {
            return `<figure><blockquote>${match.groups.quote}</blockquote><figcaption>- ${match.groups.caption} ${ match.groups.cite ? `<cite>${match.groups.cite}</cite>` : '' }</figcaption></figure>`;
        }
    }
};

marked.use({ renderer });

function Markdown({ type = 'div', children, ...props}) {

    // creates the markup
    const convertMarkdown = function(raw) {
        return { __html: marked(raw) };
    }

    // sets the markup inside an element
    return React.createElement(type, {dangerouslySetInnerHTML: convertMarkdown(children), ...props}, null);
};

export default Markdown;