import React from 'react';
import SignIn from './components/SignIn';
import Success from './components/Success';
import PagePost from './components/PagePost';
import Blog from './components/Blog';
import './App.css'

const App = () => {
    return (
        <>
        <SignIn />
        <Success />
        <PagePost />
        <Blog />
        </>
    )
}

export default App;
