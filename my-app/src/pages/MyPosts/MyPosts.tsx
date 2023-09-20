import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'
import { CREATE_USER, GET_MYPOSTS, SIGN_IN } from 'src/actions/actions';
import { Link, useNavigate } from 'react-router-dom';
import { addPost } from 'src/helpers';
import "./MyPosts.css"
import { IPost } from 'src/interfaces';

const MyPosts = () => {
    const myPosts = useSelector(({myPosts}) => myPosts);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

    useEffect(() => {
        dispatch(GET_MYPOSTS());
    },[]);

    console.log(myPosts);
 
    return (
        <>
        {!!myPosts.length &&
            <PageTemplate title='My Posts' hasBack type_header='authorized'>
                <Link to='/add-post' className='add-post'>Add Post</Link>
                <div className="flex">
                    {myPosts.map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
                </div>
            </PageTemplate>
        }
        </>
    )
}

export default MyPosts
