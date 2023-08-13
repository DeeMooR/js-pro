import React, {useState} from 'react'
import './Post3.css'

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

const Post3 = ({obj}: {obj: IPost}) => {
    const [like, setValueLike] = useState(false);
    const [dislike, setValueDislike] = useState(false);
    const addLike = () => {
        if (!dislike) setValueLike(prevState => !prevState)
    }
    const addDislike = () => {
        if (!like) setValueDislike(prevState => !prevState)
    }

    return (
        <article className='post3'>
            <div className="post3__main">
                <div className="post3__information">
                    <p className='post3__date'>{obj.date}</p>
                    <h2 className='post3__title'>{obj.title}</h2>
                </div>
                <div className="post3__image">
                    <img src={obj.image} alt="image" />
                </div>
            </div>
            <div className="post3__icons">
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
    )
}

export default Post3
