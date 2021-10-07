import React from 'react';
import format from 'date-fns/format';
// settings
import {blogName, blogDescription} from '../../settings/blog';
import categories from '../../settings/categories';
import authors from '../../settings/authors';
// components
import Main from '../Main';
import Nav from '../Nav';
import Markdown from './Markdown';

// to create a link to author page if has a valid author
export const createAuthorLink = function(authorId) {
    if (authorId && authors[authorId]) {
        return <span>by <a href={`/authors/${authorId}`}>{authors[authorId].name}</a></span>
    } else {
        return '';
    }
}

// to create a link to category page if has a valid category
const createCategoryLink = function(categoryId) {
    if (categoryId && categories[categoryId]) {
        return <span>in <a href={`/${categoryId}`}>{categories[categoryId]}</a></span>
    } else {
        return '';
    }
}

// blog list component
function List({posts, page, position, ...props}) {

    return (
        <Main {...props}>
            <div className="text-gray-900 flex flex-col min-h-screen">
                <Nav />
                <div className="bg-gray-100 p-5">
                    <div className="max-w-3xl mx-auto text-center mt-10 py-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug">{blogName}</h1>
                        <Markdown className="md:text-lg py-10 prose" type="div">{blogDescription}</Markdown>
                    </div>
                </div>
                <div className="p-5">
                    <div className="max-w-screen-lg mx-auto lg:flex">
                        <div className="lg:pr-20 lg:w-2/3">
                            {posts.map(function(post) {
                                return (
                                    <div className="my-20" key={post.path}>
                                        <a href={`/${post.path}`}>
                                            <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug">{post.title}</h2>
                                            <p className="my-5 prose">{post.description}</p>
                                        </a>
                                        <p className="prose prose-sm">Written {createAuthorLink(post.authorId)} {createCategoryLink(post.categoryId)} on {format(post.date, 'MMMM do, yyyy')}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="lg:w-1/3 lg:p-5">
                            <div className="my-16">
                                <h3 className="uppercase text-sm font-bold py-2 text-gray-900 text-opacity-70"><a href="/">Categories</a></h3>
                                <ul className="text-xl font-medium leading-loose">
                                    { Object.keys(categories).map(function(category) {
                                        return <li key={category}><a href={`/${category}`}>{categories[category]}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default List;