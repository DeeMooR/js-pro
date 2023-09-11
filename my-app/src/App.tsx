import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Success from './pages/Success';
import PagePost from './pages/PagePost';
import Blog from './pages/Blog';
import Home from './pages/Home';
import ActivateUser from './components/ActivateUser';
import './App.css'

const App = () => {
    const location = useLocation();
    const token = localStorage.getItem('access');
    console.log(token);
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
            {/* Если такой ссфлки нет */}
            <Route path='*' element={<Navigate to='/blog'/>} />
        </Routes>
        {location.pathname === '/' && <Navigate to='/blog' />}
        </>
    )
}

export default App;
