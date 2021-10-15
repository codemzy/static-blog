import React from 'react';
import format from 'date-fns/format';
// settings
import {blogPath, blogName, blogDescription} from '../../settings/blog';
import categories from '../../settings/categories';
import authors from '../../settings/authors';
// components
import Main from '../Main';
import Markdown from './Markdown';
// svg
import { ArrowLeft, ArrowRight } from '../svg/Icons';

// to create a link to author page if has a valid author
export const createAuthorLink = function(authorId) {
    if (authorId && authors[authorId]) {
        return <span>by <a href={`${blogPath}/author/${authorId}`}>{authors[authorId].name}</a></span>
    } else {
        return '';
    }
};

// to create a link to category page if has a valid category
const createCategoryLink = function(categoryId) {
    if (categoryId && categories[categoryId]) {
        return <span>in <a href={`${blogPath}/${categoryId}`}>{categories[categoryId].name}</a></span>
    } else {
        return '';
    }
}

// pager component
function Pager({page, pages, path}) {

    // remove the current page from the path
    path = path.replace(/\/?index(?![\s\S]*\/?index)/, '');
    path = path.replace(/\/?page\/\d+/, '');
    
    const href = function(linkedPage) {
        // path for link or if it's empty just return / to go back to index
        return `${path}${linkedPage === 1 ? "" : `/page/${linkedPage}`}` || "/";
    };

    const pageLink = function(linkedPage) {
        return <a href={href(linkedPage)} className="inline-block p-3">{linkedPage}</a>;
    };

    const previousIcon = <ArrowLeft className="inline-block -mt-0.5" width="18" height="18" aria-label="Previous" />;
    const nextIcon = <ArrowRight className="inline-block -mt-0.5" width="18" height="18" aria-label="Next" />;
    

    return (
        pages > 1 ? // only show pager if there's more than one page
        <div className="p-5 text-center font-medium text-gray-900 text-opacity-60 w-full">
            { page > 1 ? <a href={href(page - 1)} className="inline-block p-3">{previousIcon}</a> : <div className="inline-block p-3 text-gray-300">{previousIcon}</div> }
            { page - 4 > 0 && pages - page < 1 ? pageLink(page - 4) : false }
            { page - 3 > 0 && pages - page < 2 ? pageLink(page - 3) : false }
            { page - 2 > 0 ? pageLink(page - 2) : false }
            { page - 1 > 0 ? pageLink(page - 1) : false }
            <div className="inline-block p-3 text-gray-900 underline">{page}</div>
            { page + 1 <= pages ? pageLink(page + 1) : false }
            { page + 2 <= pages ? pageLink(page + 2) : false }
            { page + 3 <= pages && page < 3 ? pageLink(page + 3) : false }
            { page + 4 <= pages && page < 2 ? pageLink(page + 4) : false }
            { page + 1 <= pages ? <a href={href(page + 1)} className="inline-block p-3">{nextIcon}</a> : <div className="inline-block p-3 text-gray-300">{nextIcon}</div> }
        </div>
        : null
    )
};

// blog list page component
function List({category, author, posts, page, pages, path, ...props}) {

    return (
        <Main {...props}>
            <div className="flex flex-col flex-grow">
                <div className="p-5">
                    <div className="max-w-3xl mx-auto text-center mt-10 py-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug">
                            { category ? categories[category].name : author ? authors[author].name :  blogName }
                        </h1>
                        <Markdown className="md:text-lg py-10 prose dark:prose-dark" type="div">
                            { category && categories[category].description ? categories[category].description : 
                            author && authors[author].description ? authors[author].description : blogDescription }
                        </Markdown>
                    </div>
                </div>
                <div className="m-5 flex-grow max-w-screen-lg lg:mx-auto lg:flex lg:flex-wrap">
                    <div className="lg:pr-20 lg:w-2/3">
                        {posts.map(function(post) {
                            return (
                                <div className="my-20" key={post.path}>
                                    <a href={`${post.path}`} className="group focus:outline-none">
                                        <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">{post.title}</h2>
                                        <p className="my-5 prose dark:prose-dark">{post.description}</p>
                                    </a>
                                    <p className="prose prose-sm dark:prose-dark">Written {createAuthorLink(post.authorId)} {createCategoryLink(post.categoryId)} on {format(post.date, 'MMMM do, yyyy')}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full my-5 lg:order-last lg:mt-auto"><Pager page={page} pages={pages} path={path} /></div>
                    <div className="lg:w-1/3 lg:p-5">
                        <div className="my-16">
                            <h3 className="uppercase text-sm font-bold py-2 text-gray-500"><a href={blogPath || "/"}>Categories</a></h3>
                            <ul className="text-xl font-medium leading-loose">
                                { Object.keys(categories).map(function(category) {
                                    return <li key={category}><a href={`${blogPath}/${category}`}>{categories[category].name}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default List;