import React from 'react';
import format from 'date-fns/format';
// settings
import categories from '../../settings/categories';
import authors from '../../settings/authors';
// components
import Main from '../Main';
import Nav from '../Nav';

// blog list component
function List(props) {

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
                <div className="bg-gray-100 p-5">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">The Static Blog</h1>
                        <p className="md:text-lg py-10 prose">Something about the blog that you are creating, and what you will be writing about. Oh and maybe a <a href="">link to your newsletter</a> or something!</p>
                    </div>
                </div>
                <div className="p-5">

                </div>
            </div>
        </Main>
    );
};

export default List;