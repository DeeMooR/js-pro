import React, {FC} from 'react'
import './Input.css'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email',
}

const Input:FC<IInput> = ({label, placeholder, type}) => {
  return (
    <div className='input__container'>
        <span>{label}</span>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
