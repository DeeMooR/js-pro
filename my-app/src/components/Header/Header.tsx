import React, {FC, useContext} from 'react'
import Button from '../Button'
import { ThemeContext } from 'src/App'
import { StyledHeader, StyledButtonBlue, StyledButtonLightBlue } from './styled'
import './Header.css'

import IconMenu from "src/icons/menu.png"
import IconCross from "src/icons/cross.png"
import IconSearch from "src/icons/search.png"

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <StyledHeader theme={theme} className='header'>
            <StyledButtonBlue theme={theme}>
                <img src={IconMenu} alt="menu" />
            </StyledButtonBlue>
            <input className="header__input" type="text" placeholder='Search...'/>
            <StyledButtonLightBlue theme={theme}>
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
