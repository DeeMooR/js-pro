import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Sorting.css'

interface ISorting {
    type: 'POSTS' | 'MY_POSTS'
}

const Sorting:FC<ISorting> = ({type}) => {
    let sortingValue = useSelector(({sortingPosts, sortingMyPosts}) => (type === 'POSTS') ? sortingPosts : sortingMyPosts);
    const dispatch = useDispatch();

    const handleSorting = (event: any) => {
        const value = event.target.value;
        dispatch({ type: `TOGGLE_SORTING_${type}`, payload: value})
    };

    return (
        <div className='sorting'>
            <p className='sorting__text'>Сортировка по: </p>
            <select className="sorting__box" value={sortingValue} onChange={handleSorting}>
                <option selected>none</option>
                <option>date</option>
                <option>title</option>
                {type === 'POSTS' && <option>text</option>}
                <option>lesson_num</option>
            </select>
        </div>
    )
}

export default Sorting
