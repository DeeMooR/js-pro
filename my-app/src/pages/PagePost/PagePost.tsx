import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'
import {IPost} from 'src/interfaces';

const PagePost = ({posts}: {posts: IPost[]}) => {
    const {id} = useParams<{id: string}>();

    return (
        <>
        {id &&
            <PageTemplate title={posts[+id - 1].title} hasBack hasPrevNext type_header='authorized'>
                <div className='page-post__container'>
                    <Post obj={posts[+id - 1]} type='page' />
                </div>
            </PageTemplate>
        }
        </>
    )
}

export default PagePost
