import React, {useState} from 'react'
import './Post.css'

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number
}

const Post = ({obj, type}: {obj: IPost, type: 'big' | 'middle' | 'small'}) => {
    const [like, setValueLike] = useState(false);
    const [dislike, setValueDislike] = useState(false);
    const addLike = () => {
        if (!dislike) setValueLike(prevState => !prevState)
    }
    const addDislike = () => {
        if (!like) setValueDislike(prevState => !prevState)
    }


    function getBigOrSmallPost() {
        return (
            <div className={`post-${type}__main post__main`}>
                <div className={`post-${type}__information`}>
                    <p className={`post-${type}__date`}>{obj.date}</p>
                    <h2 className={`post-${type}__title`}>{obj.title}</h2>
                    {type === 'big' ? <p className={`post-${type}__description`}>{obj.description}</p> : null}
                </div>
                <div className={`post-${type}__image`}>
                    <img src={obj.image} alt="image" />
                </div>
            </div>
        );
    }
    function getMiddlePost() {
        return (
            <>
            <div className={`post-${type}__image`}>
                <img src={obj.image} alt="image" />
            </div>
            <p className={`post-${type}__date`}>{obj.date}</p>
            <h2 className={`post-${type}__title`}>{obj.title}</h2>
            </>
        );
    }

    return (
        <>
        <article className={`post-${type} post`}>
            {type === 'big' || type === 'small' ? getBigOrSmallPost() : null}
            {type === 'middle' ? getMiddlePost() : null}

            <div className={`post-${type}__icons post__icons`}>
                <div className="icons__left">
                    <a className='like' onClick={addLike}></a>
                    <span>{like ? obj.lesson_num + 1 : obj.lesson_num}</span>
                    <a className='dislike' onClick={addDislike}></a>
                    <span>{dislike ? obj.author + 1 : obj.author}</span>
                </div>
                <div className="icons__right">
                    <a className='save'></a>
                    <a className='three-dots'></a>
                </div>
            </div>
        </article>
        </>
    )
}

export default Post
