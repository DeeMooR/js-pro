import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'
import { PostsContext } from 'src/App';

const PagePost = () => {
    const {posts} = useContext(PostsContext);
    const {id} = useParams<{id: string}>();

    return (
        <>
        {id && posts[0] &&
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
