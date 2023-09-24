import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import instance from 'src/axiosConfig';
import Button from '../Button';

interface IViewMore {
    type: 'posts' | 'my_posts'
}

const ViewMore:FC<IViewMore> = ({type}) => {
    let posts = useSelector(({posts, myPosts}) => (type === 'posts') ? posts : myPosts);

    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    
    const showMore = () => {
        instance.get(`/blog/${type}/?limit=10&offset=${posts.length}`)
        .then((data) => {
            const newPosts = data.data.results;
            if (type === 'posts') dispatch({ type: "ADD_POSTS", payload: newPosts })
            else dispatch({ type: "ADD_MY_POSTS", payload: newPosts });
        })
    }

    return (
        <Button style='view-more' text='View more' handleClick={showMore} />
    )
}

export default ViewMore
