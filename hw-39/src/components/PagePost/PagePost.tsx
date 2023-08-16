import React, {useState, useEffect} from 'react'
import PageTemplate from '../PageTemplate'
import Post from '../Post'
import PrevNext from '../PrevNext'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number,
}

const PagePost = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=1'
    
    useEffect(() => {
        fetch(src)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(json => {
            setPosts(json.results);
        })
    }, []);

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
