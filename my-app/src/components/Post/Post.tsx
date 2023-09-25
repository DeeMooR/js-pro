import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Post.css'

import IconLikeBlack from "src/icons/like.png"
import IconLikeWhite from "src/icons/like-white.png"
import IconLikeRed from "src/icons/like-red.png"
import IconDislikeBlack from "src/icons/dislike.png"
import IconDislikeWhite from "src/icons/dislike-white.png"
import IconDislikeRed from "src/icons/dislike-red.png"
import IconSaveBlack from "src/icons/save.png"
import IconSaveWhite from "src/icons/save-white.png"
import IconSaveRed from "src/icons/save-red.png"
import IconThreeDotsBlack from "src/icons/three-dots.png"
import IconThreeDotsWhite from "src/icons/three-dots-white.png"
import { IPost } from 'src/interfaces';


const Post = ({obj, type}: {obj: IPost, type: 'page' | 'search' | 'big' | 'middle' | 'small'}) => {
    const theme = useSelector(({theme}) => theme);
    const isOpenPost = useSelector(({modalInfo}) => modalInfo.isOpenPost);
    const isOpenImage = useSelector(({modalInfo}) => modalInfo.isOpenImage);
    const addLike = () => {
        if (!obj.isDislike) {
            dispatch({type: 'SET_LIKE', payload: obj.id });
        }
    }
    const addDislike = () => {
        if (!obj.isLike) {
            dispatch({type: 'SET_DISLIKE', payload: obj.id });
        } 
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickThreeDots = () => {
        navigate(`/blog/${obj.id}`);
        if (isOpenPost) dispatch({ type: 'TOGGLE_MODAL', payload: {id: obj.id, type: 'post'}})
    }

console.log(obj);

    return (
        <article className={`post-${type} post`}>
           <div className={`post-${type}__main post__main`} onClick={!isOpenPost && type !== 'page' ? () => dispatch({ type: 'TOGGLE_MODAL', payload: {id: obj.id, type: 'post'}}) : undefined}>
                <div className={`post-${type}__information`}>
                    {type !== 'page' && <p className='post__date'>{obj.date}</p>}
                    {type !== 'page' && <h2 className={`post-${type}__title`}>{obj.title}</h2>}
                    {type === 'page' || type === 'big' &&
                        <p className={`post-${type}__description`}>{obj.description}</p>
                    }
                </div>
                <div className={`post-${type}__image`} onClick={!isOpenImage && type === 'page' ? () => dispatch({ type: 'TOGGLE_MODAL', payload: {id: obj.id, type: 'image'}}) : undefined}>
                    <img src={obj.image} alt="image" />
                </div>
                {type === 'page' && <div>Для PagePost не реализованы кнопки like, dislike, favorite</div>}
            </div>

            <div className={`post-${type}__icons post__icons`}>
                <div className="icons__left">
                    <a className='icon' onClick={addLike}>
                        <img src={obj.isLike ? IconLikeRed : theme === 'light' ? IconLikeBlack : IconLikeWhite} alt="like" />
                    </a>
                    <span>{obj.lesson_num + (obj.isLike ? 1 : 0)}</span>
                    <a className='icon' onClick={addDislike}>
                        <img src={obj.isDislike ? IconDislikeRed : theme === 'light' ? IconDislikeBlack : IconDislikeWhite} alt="dislike" />
                    </a>
                    <span>{obj.author + (obj.isDislike ? 1 : 0)}</span>
                </div>
                <div className="icons__right">
                    <a className='icon'>
                        <img src={obj.isFavorite ? IconSaveRed : theme === 'light' ? IconSaveBlack : IconSaveWhite} alt="save" onClick={() => dispatch({ type: 'SET_FAVORITE', payload: obj.id })} />
                    </a>
                    {type !== 'page' && <a className='icon'>
                        <img src={theme === 'light' ? IconThreeDotsBlack : IconThreeDotsWhite} onClick={clickThreeDots}  alt="three-dots"  />
                    </a>}
                    {type === 'page' && <a className='add-favorite'>Add to favorites</a>}
                </div>
            </div>
        </article>
    )
}

export default Post
