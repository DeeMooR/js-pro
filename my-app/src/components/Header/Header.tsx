import React, {FC, useState, ChangeEvent, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StyledHeader, StyledDivEmpty, StyledButtonBlue, StyledButtonLightBlue } from './styled'
import './Header.css'

import IconMenu from "src/icons/menu-white.png"
import IconCross from "src/icons/cross-white.png"
import IconSearch from "src/icons/search-white.png"
import IconAccount from "src/icons/account-white.png"

import IconLightBlack from "src/icons/sun.png"
import IconDarkBlack from "src/icons/moon.png"
import IconLightWhite from "src/icons/sun-white.png"
import IconDarkWhite from "src/icons/moon-white.png"

interface IHeader {
    onSearchChange: (newValue: string) => void,
    type: 'authorized' | 'not authorized' | 'search' ,
}

const Header:FC<IHeader> = ({ onSearchChange, type }) => {
    const [clickMenu, setClickMenu] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onSearchChange(newValue);
    };
    const clickCross = () => {
        if (inputRef.current) inputRef.current.value = '';
        onSearchChange('');
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const theme = useSelector(({theme}) => theme);

    return (
        <>
        <StyledHeader theme={theme} className='header'>
            <StyledButtonBlue theme={theme} onClick={() => setClickMenu(!clickMenu)} >
                <img src={clickMenu ? IconCross : IconMenu} alt="menu" />
            </StyledButtonBlue>

            {type === 'search' ?
                <>
                <input ref={inputRef} className="header__input" type="text" placeholder='Search...' onChange={handleSearchChange} />
                <StyledButtonLightBlue theme={theme} onClick={clickCross}>
                    <img src={IconCross} alt="cross" />
                </StyledButtonLightBlue>
                </>
            : <StyledDivEmpty theme={theme} className="header__empty"></StyledDivEmpty>}

            <StyledButtonBlue theme={theme}>
                <img src={IconSearch} alt="search" />
            </StyledButtonBlue>
            
            {type === 'not authorized' ?
                <StyledButtonBlue theme={theme}>
                    <img src={IconAccount} alt="account" />
                </StyledButtonBlue>
            : <div className="header__name">Artem Malkin</div>}
        </StyledHeader>

        <div className={`menu__container ${clickMenu && 'show'}`}>
            {type !== 'not authorized' &&
                <a className="menu__account">Artem Malkin</a>
            }
            <Link to='/home' className="menu__home">Home</Link>
            {type !== 'not authorized' &&
                <>
                <Link to='/blog' className="menu__blog">Blog</Link>
                <a className="menu__add-post">Add post</a>
                </>
            }
            <div className="menu__toggle-theme">
                <button type='button' onClick={() => dispatch({ type: 'TOGGLE_THEME', payload: 'light' })}><img src={theme === 'light' ? IconLightBlack : IconLightWhite} alt="light-theme" /></button>
                <button type='button' onClick={() => dispatch({ type: 'TOGGLE_THEME', payload: 'dark' })}><img src={theme === 'light' ? IconDarkBlack : IconDarkWhite} alt="dark-theme" /></button>
            </div>
            {type === 'not authorized' ?
                <button type='button' className="menu__leave" onClick={() => navigate('/sign-in')}>Sign In</button>
            : <button type='button' className="menu__leave">Log Out</button>}
        </div>
        </>
    )
}

export default Header
