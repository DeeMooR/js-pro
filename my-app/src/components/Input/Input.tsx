import React, {Dispatch, FC, SetStateAction} from 'react'
import { useSelector } from 'react-redux';
import { StyledSpan, StyledInput } from './styled'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email' | 'text',
    value: string,
    handleChange: Dispatch<SetStateAction<string>>
}

const Input:FC<IInput> = ({label, placeholder, type, value, handleChange}) => {
    const theme = useSelector(({theme}) => theme);

    return (
        <div>
            <StyledSpan>{label}</StyledSpan>
            <StyledInput theme={theme} type={type} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.currentTarget.value)} />
        </div>
    )
}

export default Input
