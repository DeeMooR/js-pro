import React, {useState} from 'react'
import PageTemplate from '../PageTemplate';
import Navigation from './Navigation'
import PrevNext from '../PrevNext';
import Posts from './Posts';

const Blog = () => {
    return (
        <PageTemplate title='Blog' noBack>
            <div className='blog__container'>
                <Navigation />
                <Posts />
                <PrevNext />
            </div>
        </PageTemplate>
    )
}

export default Blog
