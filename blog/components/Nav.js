import React from 'react';
import { blogName } from '../settings/blog';
// svg
import { Sun, Moon } from '../components/svg/Icons';

// dark mode button
function DarkModeBtn() {
    return (
        <button id="button-dark-mode" className="h-12 w-12 p-1 inline-flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
            <Sun width="30" height="30" className="inline-block" />
            <Moon width="30" height="30" className="inline-block hidden" />
        </button>
    );
}

// nav component
function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-5 px-4">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center font-medium">
                <a href="/" className="font-bold text-gray-900 md:mr-auto md:-mt-1 text-2xl inline-flex items-center uppercase">
                    { blogName }
                </a>
                <div className="my-8 md:my-0 mx-1"><div className="relative inline-block"><DarkModeBtn /></div></div>
            </div>
        </nav>
    );
};

export default Nav;