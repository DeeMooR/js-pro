import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Post from 'src/components/Post'
import { IPost } from 'src/interfaces';
import './Posts.css'
import { FETCH_POSTS } from 'src/actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import instance from 'src/axiosConfig';
import ViewMore from 'src/components/ViewMore/ViewMore';
import Sorting from 'src/components/Sorting';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const sortingPosts = useSelector(({sortingPosts}) => sortingPosts);
    const navigation = useSelector(({navigation}) => navigation);
    let posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!posts.length) dispatch(FETCH_POSTS());
    }, []);

    useEffect(() => {
        if (navigation === 'All') {
            instance.get(`/blog/posts/?limit=10&sortBy=${sortingPosts}`)
            .then((data) => {
                posts = data.data.results;
            });
            if (sortingPosts === 'none' || sortingPosts === '') navigate('/blog');
            else navigate(`/blog/?limit=10&sortBy=${sortingPosts}`);
        }
    }, [sortingPosts]);

    console.log(posts);
    console.log(sortingPosts);

    // posts = [
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 1,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 2,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 3,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 4,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 5,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 6,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 7,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 8,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 9,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 10,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 11,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 12,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 13,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 14,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 15,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 16,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 17,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    //     {id: 70,image: 'img',text: 'ku',date: '24-09-23',lesson_num: 18,title: 'ku2',description: 'ku3',author: 26,isFavorite: false,isLike: false,isDislike: false},
    // ];

    return (
        <>
        {!!posts.length &&
        <>
            {navigation === 'All' &&
                <>
                <Sorting type='POSTS' />
                <div className="grid-container__all">
                    {posts.map((post: IPost, i: number) => 
                        <div className="grid-item">
                            {(i % 4 === 0 || i % 4 === 1) ? <Post key={i} obj={post} type='middle' /> : <Post key={i} obj={post} type='small' /> }
                        </div>
                    )}
                </div>
                <ViewMore type='posts' />
                </>
            }
            {navigation === 'My favorites' &&
            <div className="grid-container">
                {posts
                .filter((post: IPost) => post.isFavorite)
                .map((post: IPost, i: number) => <Post key={i} obj={post} type='middle' />)}
            </div>
            }
            {navigation === 'Popular' &&
            <div className="grid-container">
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
