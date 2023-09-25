import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'
import { CREATE_USER, GET_MYPOSTS, SIGN_IN } from 'src/actions/actions';
import { Link, useNavigate } from 'react-router-dom';
import "./MyPosts.css"
import { IPost } from 'src/interfaces';
import ViewMore from 'src/components/ViewMore/ViewMore';
import Sorting from 'src/components/Sorting';
import instance from 'src/axiosConfig';

const MyPosts = () => {
    const sortingMyPosts = useSelector(({sortingMyPosts}) => sortingMyPosts);
    let myPosts = useSelector(({myPosts}) => myPosts);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(GET_MYPOSTS());
    },[]);
    
    useEffect(() => {
        instance.get(`/blog/posts/my_posts/?limit=10&sortBy=${sortingMyPosts}`)
        .then((data) => {
            myPosts = data.data.results;
        });
        if (sortingMyPosts === 'none' || sortingMyPosts === '') navigate('/my-posts');
        else navigate(`/my-posts/?limit=10&sortBy=${sortingMyPosts}`);
    }, [sortingMyPosts]);

    console.log(sortingMyPosts);
    console.log(myPosts);
 
    return (
        <>
        {!!myPosts.length &&
            <PageTemplate title='My Posts' hasBack type_header='authorized'>
                <Sorting type='MY_POSTS' />
                <Link to='/add-post' className='add-post'>Add Post</Link>
                <div className="flex">
                    {myPosts.map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
                </div>
                <ViewMore type='my_posts'/>
            </PageTemplate>
        }
        </>
    )
}

export default MyPosts
