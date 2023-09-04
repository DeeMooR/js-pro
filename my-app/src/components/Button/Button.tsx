import React, {FC} from 'react'
import './Button.css'

interface ITitle {
    text: string;
    handleClick?: () => void
}

const Button:FC<ITitle> = ({text, handleClick}) => {
    return (
        <button className='custom-button' onClick={handleClick}>{text}</button>
    )
}

export default Button
