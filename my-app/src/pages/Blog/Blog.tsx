import React from 'react'
import PageTemplate from 'src/components/PageTemplate';
import Sorting from 'src/components/Sorting';
import Navigation from './Navigation'
import Posts from './Posts';
import './Blog.css'

const Blog = () => {
    return (
        <PageTemplate title='Blog' hasPrevNext hasNumbers type_header='search'>
            <div className='blog__container'>
                <Navigation />
                <Posts />
            </div>
        </PageTemplate>
    )
}

export default Blog
