import React from 'react';
// svg
import { Sun, Moon } from '../components/svg/Icons';

// dark mode button
function DarkModeBtn() {
    return (
        <button id="button-dark-mode" className="btn h-12 w-12 p-2 inline-flex items-center justify-center rounded-full bg-gray-100">
            <Sun width="25" height="25" className="inline-block" />
            <Moon width="25" height="25" className="inline-block hidden" />
        </button>
    );
}

// nav component
function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-5 px-4">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center font-medium">
                <a href="/" className="font-bold text-gray-900 md:mr-auto md:-mt-1 text-2xl inline-flex items-center uppercase">
                    React Static
                </a>
                <div className="my-8 md:my-0 mx-1"><div className="relative inline-block"><DarkModeBtn /></div></div>
            </div>
        </nav>
    );
};

export default Nav;