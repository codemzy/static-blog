import React from 'react';
import marked from 'marked';
import Prism from 'prismjs';

const renderer = {
    blockquote(quote) {
        let match = quote.match(/(?<quote>[\w\W]+)?(?:<p>-- (?<caption>[^-]+)(?:- (?<cite>.*))?<\/p>)/m);
        if (match && match.groups) {
            return `<figure><blockquote>${match.groups.quote}</blockquote><figcaption>- ${match.groups.caption} ${ match.groups.cite ? `<cite>${match.groups.cite}</cite>` : '' }</figcaption></figure>`;
        }
        return false; // return default if no caption
    },
    code(code, infostring, escaped) {
        if (infostring) {
            return `<pre><code class="language-${infostring}">${Prism.highlight(code, Prism.languages[infostring], infostring)}</code></pre>`;
        }
        return false; // or return default
    },
    link(href, title, text) {
        // add target blank to external links
        if (href.match(/http/gi)) {
            return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
        }
        return false; // or return default
    },
    list(body, ordered, start) {
        // return letter lists
        if (!ordered && body.match(/^<li>[a-z]\)<\/li>/)) {
            let match = body.match(/^<li>(?<letter>[a-z])\)<\/li>(?<list>[\w\W]+)?/m); // check if it's a letter list
            if (match && match.groups && match.groups.letter) {
                return `<ol type="a" start="${match.groups.letter.charCodeAt(0) - 96}">${match.groups.list}</ol>`;
            }
        }
        return false; // or return default
    },
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