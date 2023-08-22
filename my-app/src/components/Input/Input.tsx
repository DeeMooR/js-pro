import React, {FC, useContext} from 'react'
import { ThemeContext } from 'src/App'
import { StyledSpan, StyledInput } from './styled'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email' | 'text',
}

const Input:FC<IInput> = ({label, placeholder, type}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <StyledSpan>{label}</StyledSpan>
            <StyledInput theme={theme} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input
