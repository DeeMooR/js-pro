import React, {useState, useEffect, createContext} from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Success from './pages/Success';
import PagePost from './pages/PagePost';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { fetchData } from 'src/helpers'
import {IPost} from 'src/interfaces';
import './App.css'


interface IPostsContext {
    posts: IPost[] | [],
}
export const PostsContext = createContext<IPostsContext>({ posts: [] });

interface IThemeContext {
    theme: 'light' | 'dark',
    toggleLightTheme: () => void,
    toggleDarkTheme: () => void,
}
export const ThemeContext = createContext<IThemeContext>({ theme: 'light', toggleLightTheme: () => {}, toggleDarkTheme: () => {}});

const App = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleLightTheme = () => setTheme('light');
    const toggleDarkTheme = () => setTheme('dark');
    
    const [posts, setPosts] = useState<IPost[]>([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=30'
    useEffect(() => {
        fetchData(src, setPosts);
    }, []);

    const location = useLocation();

    return (
        <>
        {posts[0] &&
            <PostsContext.Provider value={{ posts }}>
            <ThemeContext.Provider value={{theme, toggleLightTheme, toggleDarkTheme}}>
                <Routes>
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<PagePost />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/success' element={<Success />} />
                    <Route path='/sign-in' element={<SignInUp text='Sign In' />} />
                </Routes>
                {location.pathname === '/' && <Navigate to='/blog' />}
            </ThemeContext.Provider>
            </PostsContext.Provider>
        }
        </>
    )
}

export default App;
