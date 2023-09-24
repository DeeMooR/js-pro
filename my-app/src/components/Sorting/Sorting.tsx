import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Sorting.css'

const Sorting = () => {
    const sortingValue = useSelector(({sorting}) => sorting);
    const dispatch = useDispatch();

    const handleSorting = (event: any) => {
        const value = event.target.value;
        dispatch({ type: 'TOGGLE_SORTING', payload: value})
    };

    return (
        <div className='sorting'>
            <p className='sorting__text'>Сортировка по: </p>
            <select className="sorting__box" value={sortingValue} onChange={handleSorting}>
                <option selected>none</option>
                <option>date</option>
                <option>title</option>
                <option>text</option>
                <option>lesson_num</option>
            </select>
        </div>
    )
}

export default Sorting
