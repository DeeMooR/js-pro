import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Success from './pages/Success';
import PagePost from './pages/PagePost';
import Blog from './pages/Blog';
import Home from './pages/Home';
import {fetchData} from './helpers';
import './App.css'

const App = () => {
    const [posts, setPosts] = useState([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=30'

    useEffect(() => {
        fetchData(src, setPosts);
    }, []);

    const location = useLocation();

    return (
        <>
        <Routes>
            <Route path='/blog' element={<Blog posts={posts} />} />
            <Route path='/blog/:id' element={!!posts.length && <PagePost posts={posts} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/success' element={<Success />} />
            <Route path='/sign-in' element={<SignInUp text='Sign In' />} />
        </Routes>
        {location.pathname === '/' && <Navigate to='/blog' />}
        </>
    )
}

export default App;
