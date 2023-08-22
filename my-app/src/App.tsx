import React, {useState, useEffect, createContext} from 'react';
import SignInUp from './components/SignInUp';
import Success from './components/Success';
import PagePost from './components/PagePost';
import Blog from './components/Blog';
import {fetchData} from './helpers';
import './App.css'

interface IThemeContext {
    theme: 'light' | 'dark',
    toggleTheme: () => void,
}

export const ThemeContext = createContext<IThemeContext>({theme: 'light', toggleTheme: () => {}});

const App = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const [posts, setPosts] = useState([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'

    useEffect(() => {
        fetchData(src, setPosts);
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <SignInUp text='Sign Up' />
            <SignInUp text='Sign In' />
            <Success />
            <PagePost posts={posts} />
            <Blog posts={posts} />
        </ThemeContext.Provider>
    )
}

export default App;
