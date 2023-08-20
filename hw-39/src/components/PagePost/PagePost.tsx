import React, {useState, useEffect} from 'react'
import PageTemplate from '../PageTemplate'
import Post from '../Post'
import PrevNext from '../PrevNext'
import {IPost} from 'src/interfaces';

const PagePost = ({posts}: {posts: IPost[]}) => {
    return (
        <div>
            {posts[0] &&
                <PageTemplate title={posts[0].title}>
                    <div className='page-post__container'>
                        <Post obj={posts[0]} type='page' />
                        <PrevNext />
                    </div>
                </PageTemplate>
            }
        </div>
    )
}

export default PagePost
