import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Success from './pages/Success';
import PagePost from './pages/PagePost';
import Blog from './pages/Blog';
import Home from './pages/Home';
import './App.css'

const App = () => {
    const location = useLocation();

    return (
        <>
        <Routes>
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<PagePost />} />
            <Route path='/home' element={<Home />} />
            <Route path='/success' element={<Success />} />
            <Route path='/sign-in' element={<SignInUp text='Sign In' />} />
            <Route path='/sign-up' element={<SignInUp text='Sign Up' />} />
        </Routes>
        {location.pathname === '/' && <Navigate to='/blog' />}
        </>
    )
}

export default App;
