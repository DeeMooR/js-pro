import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'

const PagePost = () => {
    const posts = useSelector(({posts}) => posts);
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
