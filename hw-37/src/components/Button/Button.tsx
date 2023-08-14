import React from 'react'

interface ITitle {
    text?: string;
    customClass: string;
}

const Button = ({text, customClass}: ITitle) => {
    const bthClick = (a: number, b: string) => {
        console.log(a);
        console.log(b);
    }
    return (
        <button className={customClass} onClick={(e) => bthClick(25, 'button')}>{text}</button>
    )
}

export default Button
