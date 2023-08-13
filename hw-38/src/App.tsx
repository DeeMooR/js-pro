import React, {useState} from 'react';
import Post1 from './components/posts/Post1';
import Post2 from './components/posts/Post2';
import Post3 from './components/posts/Post3';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [isReceived, setReceived] = useState(false);
    const [showPosts, setShowPosts] = useState(false);

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
    const buttonClicked = () => {
        if(!isReceived) {
            fetchPosts();
            setReceived(prevState => prevState = true);
        }
        setShowPosts(prevState => !prevState);
    }

    return (
        <>
        <button onClick={buttonClicked}>
            {showPosts ? 'Hide' : 'Show'} posts
        </button>
        {showPosts ?
            <div className="flex1">
                <div className="flex1-left">
                    {posts.length > 0 && <Post1 obj={posts[0]} />}
                    <div className="flex2">
                        <div className="flex2-left">
                            {posts.slice(1, 3).map(i => <Post2 obj={i} />)}
                        </div>
                        <div className="flex2-right">
                            {posts.slice(3, 5).map(i => <Post2 obj={i} />)}
                        </div>
                    </div>
                </div>
                <div className="flex1-right">
                    {posts.slice(5).map(i => <Post3 obj={i} />)}
                </div>
            </div>
        : ''}
        </>
    );
}

export default App;
