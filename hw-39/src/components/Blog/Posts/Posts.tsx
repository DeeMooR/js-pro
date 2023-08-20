import React, {useState, useEffect} from 'react'
import Post from 'src/components/Post'
import './Posts.css'
import {IPost} from 'src/interfaces';

const Posts = ({posts}: {posts: IPost[]}) => {
    return (
        <div className="flex-middle-small">
            <div className="flex-middle">
                <div className="flex-middle__left">
                    {posts.slice(0, 3).map((value, i) => <Post key={i} obj={value} type='middle' />)}
                </div>
                <div className="flex-middle__right">
                    {posts.slice(3, 6).map((value, i) => <Post key={i} obj={value} type='middle' />)}
                </div>
            </div>
            <div className="flex-small">
                {posts.slice(5).map((value, i) => <Post key={i} obj={value} type='small' />)}
            </div>
        </div>
    );
}

export default Posts
