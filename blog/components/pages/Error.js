import React from 'react';
// components
import Main from '../Main';

// notify page
function ErrorPage(props) {
    return (
        <Main {...props}>
            <div className="text-gray-900 flex flex-col min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-red-600 text-2xl font-bold uppercase">{props.title}</h1>
                    <div className="prose lg:prose-lg max-w-none my-10">
                        <p>{props.description}</p>
                        <p>Explore the <a href="/">Blog.</a></p>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default ErrorPage;