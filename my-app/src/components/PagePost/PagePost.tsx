import React, {useState, useEffect} from 'react'
import PageTemplate from '../PageTemplate'
import Post from '../Post'
import {IPost} from 'src/interfaces';

const PagePost = ({posts}: {posts: IPost[]}) => {
    return (
        <>
        {posts[0] &&
            <PageTemplate title={posts[0].title} hasPrevNext>
                <div className='page-post__container'>
                    <Post obj={posts[0]} type='page' />
                </div>
            </PageTemplate>
        }
        </>
    )
}

export default PagePost
