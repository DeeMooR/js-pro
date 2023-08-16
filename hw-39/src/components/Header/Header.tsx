import React, {FC} from 'react'
import Button from '../Button'
import './Header.css'

interface IHeader {
    isDark: boolean
}

const Header:FC<IHeader> = ({isDark}) => {
    return (
        <header className={`header ${isDark ? 'dark' : ''}`}>
            <button className='header__menu-icon'/>
            <input className="header__input" type="text" placeholder='Search...'/>
            <button className='header__cross'/>
            <button className='header__search-icon'/>
            <div className="header__name">Artem Malkin</div>
        </header>
    )
}

export default Header
