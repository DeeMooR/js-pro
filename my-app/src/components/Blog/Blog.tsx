import React, {useState} from 'react'
import PageTemplate from '../PageTemplate';
import Navigation from './Navigation'
import Posts from './Posts';
import {IPost} from 'src/interfaces';

const Blog = ({posts}: {posts: IPost[]}) => {
    return (
        <PageTemplate title='Blog' hasPrevNext hasNumbers>
            <div className='blog__container'>
                <Navigation />
                <Posts posts={posts} />
            </div>
        </PageTemplate>
    )
}

export default Blog
