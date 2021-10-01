import React from 'react';

function Icon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} 
            fill={props.fill || "currentColor"} 
            stroke={props.stroke || "none"}
            width="20" height="20"
            className={`inline-block ${props.className || ""}`.trim()}
            aria-label={props.label || "Icon"}
        >
            {props.children}
        </svg>
    );
};

export const CheckIcon = function(props) {
    return ( 
        <Icon viewBox="0 0 20 20" label="Check Icon" {...props}>
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </Icon>
    );
};