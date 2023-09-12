import React, {FC, useState, ChangeEvent, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SlideBar from './SlideBar';
import { StyledHeader, StyledDivEmpty, StyledButtonBlue, StyledButtonLightBlue } from './styled'
import './Header.css'

import IconMenu from "src/icons/menu-white.png"
import IconCross from "src/icons/cross-white.png"
import IconSearch from "src/icons/search-white.png"
import IconAccount from "src/icons/account-white.png"


interface IHeader {
    onSearchChange: (newValue: string) => void,
    type: 'authorized' | 'not authorized' | 'search'
}

const Header:FC<IHeader> = ({ onSearchChange, type }) => {
    const userData = useSelector(({user}) => user);
    const theme = useSelector(({theme}) => theme);
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
            : <div className="header__name">{userData.username}</div>}
        </StyledHeader>
        <SlideBar clickMenu={clickMenu} type={type} />
        </>
    )
}

export default Header
