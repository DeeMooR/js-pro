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
    let sortingMyPosts: string = useSelector(({sortingMyPosts}) => sortingMyPosts);
    let myPosts: IPost[] = useSelector(({myPosts}) => myPosts);
    let arrSort = [...myPosts];
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

    useEffect(() => {
        dispatch(GET_MYPOSTS());
    },[]);

    switch(sortingMyPosts) {
        case '': case 'none': 
            arrSort = [...myPosts]; 
            break;
        case 'date': 
            arrSort = arrSort.sort((left: any, right: any) => {
                    const dateA = new Date(left.date);
                    const dateB = new Date(right.date);
                    return dateA.getTime() - dateB.getTime();
            }); 
            break;
        default: 
            arrSort = arrSort.sort((left: any, right: any) => left[sortingMyPosts] - right[sortingMyPosts]);
    }

    return (
        <>
        {!!arrSort.length &&
            <PageTemplate title='My Posts' hasBack type_header='search'>
                <Sorting type='MY_POSTS' />
                <Link to='/add-post' className='add-post'>Add Post</Link>
                <div className="flex">
                    {arrSort.map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
                </div>
                <ViewMore type='my_posts'/>
            </PageTemplate>
        }
        </>
    )
}

export default MyPosts
