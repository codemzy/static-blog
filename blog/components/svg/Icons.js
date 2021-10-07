import React from 'react';

function Icon({ children, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Icon" fill="currentColor" stroke="none" width="20" height="20" className="inline-block" {...props}>
            {children}
        </svg>
    );
};

export const ArrowLeft = function(props) {
    return ( 
        <Icon viewBox="0 0 20 20" aria-label="Arrow Left Icon" {...props}>
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
        </Icon>
    );
};

export const ArrowRight = function(props) {
    return ( 
        <Icon viewBox="0 0 20 20" aria-label="Arrow Right Icon" {...props}>
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </Icon>
    );
};

export const ChevronRight = function(props) {
    return ( 
        <Icon viewBox="0 0 20 20" aria-label="Chevron Right Icon" {...props}>
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
        </Icon>
    );
};