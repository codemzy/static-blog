import React from 'react';
import { blogBy } from '../settings/blog';
// svg
import { Sun, Moon } from './svg/Icons';

// dark mode button
function DarkModeBtn() {
    return (
        <button id="button-dark-mode" className="h-12 w-12 p-1 inline-flex items-center justify-center rounded-full focus:outline-none hover:text-gray-700 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-800">
            <Sun id="light-mode-icon" width="30" height="30" />
            <Moon id="dark-mode-icon" width="30" height="30" />
        </button>
    );
}

// nav component
function Nav() {
    return (
        <nav className="flex items-center flex-wrap p-5">
            <a href="/" className="font-bold mr-5 text-2xl inline-flex items-center uppercase">
                { blogBy }
            </a>
            <div className="ml-auto"><div className="relative inline-block"><DarkModeBtn /></div></div>
        </nav>
    );
};

export default Nav;