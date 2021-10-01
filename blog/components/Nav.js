import React from 'react';

// nav component
function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-5 px-4">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center font-medium">
                <a href="/" className="font-bold text-gray-900 md:mr-auto md:-mt-1 text-2xl inline-flex items-center uppercase">
                    React Static
                </a>
                <div className="my-8 md:my-0 mx-1"><div className="relative inline-block"><a href="/notify" className="btn btn-primary">Get Notified</a></div></div>
            </div>
        </nav>
    );
};

export default Nav;