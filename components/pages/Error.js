import React from 'react';
// components
import Main from '../Main';

// notify page
function ErrorPage(props) {
    return (
        <Main {...props}>
            <div className="flex-grow flex flex-col">
                <div className="max-w-3xl mx-auto my-auto text-center p-5">
                    <h1 className="text-red-600 text-3xl font-bold uppercase">{props.title}</h1>
                    <div className="prose lg:prose-lg dark:prose-dark max-w-none my-10">
                        <p>{props.description}</p>
                        <p>Let's go <a href="/">Home.</a></p>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default ErrorPage;