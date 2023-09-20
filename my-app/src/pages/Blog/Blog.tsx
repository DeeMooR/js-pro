import React from 'react'
import PageTemplate from 'src/components/PageTemplate';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation'
import Posts from './Posts';
import './Blog.css'
import instance from 'src/axiosConfig';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const Blog = () => {
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

    const showMore = () => {
        instance.get(`/blog/posts/?limit=10&offset=${posts.length}`)
        .then((data) => {
            const posts = data.data.results;
            dispatch({ type: "ADD_POSTS", payload: posts });
        })
    }

    return (
        <PageTemplate title='Blog' hasPrevNext hasNumbers type_header='search'>
            <div className='blog__container'>
                <Navigation />
                <Posts />
                <button className='view-more' onClick={showMore}>View more</button>
            </div>
        </PageTemplate>
    )
}

export default Blog
