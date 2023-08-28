import React, {useState, useContext} from 'react'
import PageTemplate from 'src/components/PageTemplate';
import Navigation from './Navigation'
import Posts from './Posts';

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
