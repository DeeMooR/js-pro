import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignInUp from './pages/SignInUp';
import Success from './pages/Success';
import PagePost from './pages/PagePost';
import Blog from './pages/Blog';
import Home from './pages/Home';
import ActivateUser from './components/ActivateUser';
import './App.css'
import { decodeJwt, expToMinutes, updateAccessToken } from './helpers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const App = () => {
    const location = useLocation();
    const token = localStorage.getItem('access');
    console.log(token);
    
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();

    const startTokenRefreshTimer = () => {
        if (!token) return null;
        const expirationTimestamp = decodeJwt(token).payload.exp;
        const currentTime = Date.now();
        const timeUntilExpiration = expirationTimestamp*1000 - currentTime;

        if(timeUntilExpiration > 20000) {
            setInterval(updateAccessToken, timeUntilExpiration - 20000);
        } else {
            localStorage.removeItem('access');
        }
    };

    useEffect(() => {
        let token = localStorage.getItem("access");
        let response = fetch("https://studapi.teachmeskills.by/auth/users/me/",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },  
            }
        )
        .then((response) => response.json())
        .then((userData) => {
            dispatch({ type: "SET_USER", payload: userData });
        });
    });

    if (token) {
        const JWTData = decodeJwt(token);
        console.log(JWTData);
        let expTimestamp = JWTData.payload.exp;
        let remainingMinutes = expToMinutes(expTimestamp)
        console.log('remaining:' + remainingMinutes);
    }

    useEffect(() => {
        window.addEventListener('storage', (event) => {
            console.log(event);
            if (event.key === 'access' && event.newValue === null) {
                navigate("/sign-in");
            }
        });

        startTokenRefreshTimer();
    }, []);

    return (
        <>
        <Routes>
            {!token && (
                <>
                <Route path='/activate/:uid/:token' element={<ActivateUser />} />
                <Route path='/success' element={<Success />} />
                <Route path='/sign-in' element={<SignInUp text='Sign In' />} />
                <Route path='/sign-up' element={<SignInUp text='Sign Up' />} />
                </>
            )}
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<PagePost />} />
            <Route path='/home' element={<Home />} />
            <Route path='/success' element={<Success />} />
            {/* Если такой ссылки нет */}
            <Route path='*' element={<Navigate to='/blog'/>} />
        </Routes>
        {location.pathname === '/' && <Navigate to='/blog' />}
        </>
    )
}

export default App;
