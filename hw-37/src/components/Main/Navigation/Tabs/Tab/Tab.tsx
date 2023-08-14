import React from 'react'

interface ITAb {
    text: string;
    href?: string;
    isDisabled?: boolean;
}

const Tab = ({text, href, isDisabled}: ITAb) => {
    return (
        <a href={href} className={isDisabled ? 'disabled' : ''}>{text}</a>
    )
}

export default Tab
