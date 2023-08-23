import React, {FC, useContext, ChangeEvent, useRef} from 'react'
import Button from '../Button'
import { ThemeContext } from 'src/App'
import { StyledHeader, StyledButtonBlue, StyledButtonLightBlue } from './styled'
import './Header.css'

import IconMenu from "src/icons/menu.png"
import IconCross from "src/icons/cross.png"
import IconSearch from "src/icons/search.png"

interface IHeader {
    onSearchChange: (newValue: string) => void;
}

const Header:FC<IHeader> = ({ onSearchChange }) => {
    const {theme} = useContext(ThemeContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onSearchChange(newValue);
    };
    const clickCross = () => {
        if (inputRef.current) inputRef.current.value = '';
        onSearchChange('');
    };

    return (
        <StyledHeader theme={theme} className='header'>
            <StyledButtonBlue theme={theme}>
                <img src={IconMenu} alt="menu" />
            </StyledButtonBlue>
            <input ref={inputRef} className="header__input" type="text" placeholder='Search...' onChange={handleSearchChange} />
            <StyledButtonLightBlue theme={theme} onClick={clickCross}>
                <img src={IconCross} alt="cross" />
            </StyledButtonLightBlue>
            <StyledButtonBlue theme={theme}>
                <img src={IconSearch} alt="search" />
            </StyledButtonBlue>
            <div className="header__name">Artem Malkin</div>
        </StyledHeader>
    )
}

export default Header
