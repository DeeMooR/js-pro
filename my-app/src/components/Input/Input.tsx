import React, {FC, useContext} from 'react'
import { useSelector } from 'react-redux';
import { StyledSpan, StyledInput } from './styled'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email' | 'text',
}

const Input:FC<IInput> = ({label, placeholder, type}) => {
    const theme = useSelector(({theme}) => theme);

    return (
        <div>
            <StyledSpan>{label}</StyledSpan>
            <StyledInput theme={theme} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input
