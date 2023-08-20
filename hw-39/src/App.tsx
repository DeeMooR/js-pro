import React, {useState, useEffect} from 'react';
import SignInUp from './components/SignInUp';
import Success from './components/Success';
import PagePost from './components/PagePost';
import Blog from './components/Blog';
import './App.css'
import {fetchData} from './helpers';

const App = () => {
    const [posts, setPosts] = useState([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'

    useEffect(() => {
        fetchData(src, setPosts);
        console.log('1');
    }, []);

    return (
        <>
        <SignInUp text='Sign Up' />
        <SignInUp text='Sign In' />
        <Success />
        <PagePost posts={posts} />
        <Blog posts={posts} />
        </>
    )
}

export default App;
