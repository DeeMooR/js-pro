import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./SlideBar.css"

import IconLightBlack from "src/icons/sun.png"
import IconDarkBlack from "src/icons/moon.png"
import IconLightWhite from "src/icons/sun-white.png"
import IconDarkWhite from "src/icons/moon-white.png"

interface ISlideBar {
    clickMenu: boolean,
    type: 'authorized' | 'not authorized' | 'search'
}

const SlideBar:FC<ISlideBar> = ({ clickMenu, type }) => {
    const userData = useSelector(({user}) => user);
    const theme = useSelector(({theme}) => theme);
    console.log(clickMenu);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = (() => {
        localStorage.removeItem('access');
        navigate('/sign-in');
    })

    return (
        <div className={`menu__container ${clickMenu && 'show'}`}>
            {type !== 'not authorized' &&
                <a className="menu__account">{userData.username}</a>
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
            <button type='button' className="menu__leave" onClick={logOut}>Log Out</button>
        </div>
    )
}

export default SlideBar
