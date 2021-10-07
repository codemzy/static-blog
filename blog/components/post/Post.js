import React from 'react';
import format from 'date-fns/format';
// settings
import categories from '../../settings/categories';
// components
import Main from '../Main';
import Nav from '../Nav';
import Markdown from './Markdown';
// utils
import { createAuthorLink } from './List';
// svg
import { CheckIcon } from '../svg/Icons';

// homepage component
function Post(props) {

    return (
        <Main {...props}>
            <div className="text-gray-900 flex flex-col min-h-screen">
                <Nav />
                <div className="p-5">
                    <div className="max-w-3xl mx-auto my-10">
                        <p className="py-5"><a className="font-semibold text-lg md:text-xl" href={`/${props.categoryId}`}>{categories[props.categoryId].name}</a></p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">{props.title}</h1>
                        <p className="md:text-lg py-10 prose">{props.updated ? "Updated" : "Written"} {createAuthorLink(props.authorId)} on {format(props.updated || props.published, 'MMMM do, yyyy')}</p>
                    </div>
                    <div>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg lg:text-xl font-semibold">{props.description}</p>
                            <Markdown className="prose lg:prose-lg max-w-none my-10" type="article">{props.content}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Post;