import React from 'react';
import ReactDOMServer from 'react-dom/server';
import marked from 'marked';
import format from 'date-fns/format';
// settings
import categories from '../../settings/categories';
import authors from '../../settings/authors';
// components
import Main from '../Main';
import Nav from '../Nav';
// svg
import { CheckIcon } from '../svg/Icons';

// homepage component
function Post(props) {

    const createMarkup = function(raw) {
        return { __html: marked(raw) };
    }

    const createAuthorLink = function(authorId) {
        if (authorId && authors[authorId]) {
            return <span>by <a href={`/authors/${authorId}`}>{authors[authorId].name}</a></span>
        } else {
            return '';
        }
    }

    return (
        <Main {...props}>
            <div className="text-gray-900 flex flex-col min-h-screen">
                <Nav />
                <div className="p-5">
                    <div className="max-w-3xl mx-auto my-10">
                        <p className="py-5"><a className="font-semibold text-lg md:text-xl" href={`/${props.categoryId}`}>{categories[props.categoryId]}</a></p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">{props.title}</h1>
                        <p className="md:text-lg py-10 prose">{props.updated ? "Updated" : "Written"} {createAuthorLink(props.authorId)} on {format(props.updated || props.published, 'MMMM do, yyyy')}</p>
                    </div>
                    <div>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg lg:text-xl font-semibold">{props.description}</p>
                            <article className="prose lg:prose-lg max-w-none my-10" dangerouslySetInnerHTML={createMarkup(props.content)} />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Post;