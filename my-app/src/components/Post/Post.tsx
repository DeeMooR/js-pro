import React, {useState, useContext} from 'react'
import { ThemeContext } from 'src/App'
import './Post.css'

import IconLikeBlack from "src/icons/like.png"
import IconLikeWhite from "src/icons/like-white.png"
import IconDislikeBlack from "src/icons/dislike.png"
import IconDislikeWhite from "src/icons/dislike-white.png"
import IconSaveBlack from "src/icons/save.png"
import IconSaveWhite from "src/icons/save-white.png"
import IconThreeDotsBlack from "src/icons/three-dots.png"
import IconThreeDotsWhite from "src/icons/three-dots-white.png"

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

const Post = ({obj, type}: {obj: IPost, type: 'page' | 'search' | 'middle' | 'small'}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [like, setValueLike] = useState(false);
    const [dislike, setValueDislike] = useState(false);
    const addLike = () => {
        if (!dislike) setValueLike(prevState => !prevState)
    }
    const addDislike = () => {
        if (!like) setValueDislike(prevState => !prevState)
    }

    return (
        <>
        <article className={`post-${type} post`}>
            <div className={`post-${type}__main post__main`}>
                <div className={`post-${type}__information`}>
                    {type !== 'page' && <p className='post__date'>{obj.date}</p>}
                    {type !== 'page' && <h2 className={`post-${type}__title`}>{obj.title}</h2>}
                    {type === 'page' && 
                        <p className={`post-${type}__description`}>{obj.description}</p>
                    }
                </div>
                <div className={`post-${type}__image`}>
                    <img src={obj.image} alt="image" />
                </div>
            </div>

            <div className={`post-${type}__icons post__icons`}>
                <div className="icons__left">
                    <a className='icon' onClick={addLike}>
                        <img src={theme === 'light' ? IconLikeBlack : IconLikeWhite} alt="like" />
                    </a>
                    <span>{like ? obj.lesson_num + 1 : obj.lesson_num}</span>
                    <a className='icon' onClick={addDislike}>
                        <img src={theme === 'light' ? IconDislikeBlack : IconDislikeWhite} alt="dislike" />
                    </a>
                    <span>{dislike ? obj.author + 1 : obj.author}</span>
                </div>
                <div className="icons__right">
                    <a className='icon'>
                        <img src={theme === 'light' ? IconSaveBlack : IconSaveWhite} alt="save" />
                    </a>
                    {type !== 'page' && <a className='icon'>
                        <img src={theme === 'light' ? IconThreeDotsBlack : IconThreeDotsWhite} alt="three-dots" />
                    </a>}
                    {type === 'page' && <a className='add-favorite'>Add to favorites</a>}
                </div>
            </div>
        </article>
        </>
    )
}

export default Post
