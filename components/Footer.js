import React from 'react';
import format from 'date-fns/format';
import { blogBy } from '../settings/blog';

// footer component
function Footer() {
    return (
        <footer className="px-5 py-10 mt-auto">
            <div className="text-center text-sm"><a href="/" className="font-semibold">{blogBy}</a> &copy; {format(new Date(), 'yyyy')}</div>
        </footer>
    );
};

export default Footer;