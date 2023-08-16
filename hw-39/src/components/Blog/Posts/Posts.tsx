import React, {useState} from 'react'
import Post from '../../Post'
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'
    
    const fetchPosts = () => {
        fetch(src)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(json => {
            setPosts(json.results);
        })
    }
    if(!posts[0]) fetchPosts();

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
