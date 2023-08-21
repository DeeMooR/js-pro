import React, {FC} from 'react'
import './Button.css'

interface ITitle {
    text: string;
}

const Button:FC<ITitle> = ({text}) => {
    return (
        <button className='custom-button'>{text}</button>
    )
}

export default Button
