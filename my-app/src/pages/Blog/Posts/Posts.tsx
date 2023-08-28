import React, {useContext} from 'react'
import Post from 'src/components/Post'
import { PostsContext } from 'src/App';
import './Posts.css'

const Posts = () => {
    const {posts} = useContext(PostsContext);

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
                {posts.slice(5, 10).map((value, i) => <Post key={i} obj={value} type='small' />)}
            </div>
        </div>
    );
}

export default Posts
