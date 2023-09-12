import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageTemplate from 'src/components/PageTemplate'
import Post from 'src/components/Post'
import { CREATE_PAGEPOST } from 'src/actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const PagePost = () => {
    const posts = useSelector(({posts}) => posts);
    const {id} = useParams<{id: string}>();
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

    console.log(id);
    useEffect(() => {
        if (id) dispatch(CREATE_PAGEPOST(id));
    }, [id]);

    const postData = useSelector(({ pagePost }) => pagePost);
    console.log(postData);

    return (
        <>
        {id &&
            <PageTemplate title={postData.title} hasBack hasPrevNext type_header='authorized'>
                <div className='page-post__container'>
                    <Post obj={postData} type='page' />
                </div>
            </PageTemplate>
        }
        </>
    )
}

export default PagePost
