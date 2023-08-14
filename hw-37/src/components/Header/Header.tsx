import React from 'react'
import Button from '../Button'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <Button customClass='header__menu-icon'/>
            <input className="header__input" type="text" placeholder='Search...'/>
            <Button customClass='header__cross'/>
            <Button customClass='header__search-icon'/>
            <div className="header__name">Artem Malkin</div>
        </header>
    )
}

export default Header
