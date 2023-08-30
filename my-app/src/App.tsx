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

const App = () => {
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
                <Routes>
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<PagePost />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/success' element={<Success />} />
                    <Route path='/sign-in' element={<SignInUp text='Sign In' />} />
                </Routes>
                {location.pathname === '/' && <Navigate to='/blog' />}
            </PostsContext.Provider>
        }
        </>
    )
}

export default App;
