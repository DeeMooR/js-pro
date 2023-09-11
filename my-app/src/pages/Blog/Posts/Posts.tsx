import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Post from 'src/components/Post'
import { IPost } from 'src/interfaces';
import './Posts.css'
import { FETCH_POSTS } from 'src/actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';



const Posts = () => {
    const navigation = useSelector(({navigation}) => navigation);
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    
    useEffect(() => {
        if (!posts.length) dispatch(FETCH_POSTS());
    }, []);

    console.log(posts)

    return (
        <>
        {!!posts.length &&
        <>
            {navigation === 'All' &&
            <div className="flex-middle-small">
                <div className="flex-middle">
                    <div className="flex-middle__left">
                        {posts.slice(0, 3).map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
                    </div>
                    <div className="flex-middle__right">
                        {posts.slice(3, 6).map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
                    </div>
                </div>
                <div className="flex-small">
                    {posts.slice(6, 11).map((post: IPost, i: number) => <Post key={i} obj={post} type='small' />)}
                </div>
            </div>
            }
            {navigation === 'My favorites' &&
            <div className="flex">
                {posts
                .filter((post: IPost) => post.isFavorite)
                .map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
            </div>
            }
            {navigation === 'Popular' &&
            <div className="flex">
                {[...posts]
                .sort((left: IPost, right: IPost) => right.lesson_num - left.lesson_num)
                .slice(0, 10).map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
            </div>
            }
        </>
        }
        </>
    );
}

export default Posts
