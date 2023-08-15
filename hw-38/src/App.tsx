import React, {useState} from 'react';
import Post from './components/Post';
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
            setReceived(true);
        }
        setShowPosts(prevState => !prevState);
    }

    return (
        <>
        <button onClick={buttonClicked}>
            {showPosts ? 'Hide' : 'Show'} posts
        </button>
        {showPosts ?
            <div className="flex-big-small">
                <div className="flex-big-small__left">
                    {posts.slice(0, 1).map((value, i) => <Post key={i} obj={value} type='big' />)}
                    <div className="flex-middle">
                        <div className="flex-middle__left">
                            {posts.slice(1, 3).map((value, i) => <Post key={i} obj={value} type='middle' />)}
                        </div>
                        <div className="flex-middle__right">
                            {posts.slice(3, 5).map((value, i) => <Post key={i} obj={value} type='middle' />)}
                        </div>
                    </div>
                </div>
                <div className="flex-big-small__right">
                    {posts.slice(5).map((value, i) => <Post key={i} obj={value} type='small' />)}
                </div>
            </div>
        : ''}
        </>
    );
}

export default App;
