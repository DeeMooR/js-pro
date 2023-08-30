import React, {FC} from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PrevNext.css' 

import IconLeftBlack from "src/icons/left.png"
import IconLeftWhite from "src/icons/left-white.png"
import IconLeftGrey from "src/icons/left-grey.png"
import IconRightBlack from "src/icons/right.png"
import IconRightWhite from "src/icons/right-white.png"
import IconRightGrey from "src/icons/right-grey.png"

interface ISignInUp {
    hasNumbers?: boolean,
}

const PrevNext:FC<ISignInUp> = ({hasNumbers}) => {
    const theme = useSelector(({theme}) => theme);
    const isOpenImage = useSelector(({modalInfo}) => modalInfo.isOpenImage);
    const pageNumbers = ['1', '2', '3', '...', '8'];

    const {id} = useParams<{id: string}>();

    const dispatch = useDispatch();

    return (
        <>
        {id &&
            <div className='prev-next'>
                {+id > 1 ?
                    <Link to={`/blog/${+id - 1}`} className="prev" onClick={isOpenImage ? () => dispatch({ type: 'TOGGLE_MODAL', payload: {id: +id - 1, type: 'id'}}) : undefined}>
                        <img src={theme === 'light' ? IconLeftBlack : IconLeftWhite} alt="left" />
                        <span>Prev</span>
                    </Link> : 
                    <div className='disabled'>
                        <img src={IconLeftGrey} alt="left" />
                        <span>Prev</span>
                    </div>
                }
                {hasNumbers === true &&
                    <div className="prev-next__numbers">
                        {pageNumbers.map(value => <a href="#">{value}</a>)}
                    </div>
                }
                {+id < 30 ?
                    <Link to={`/blog/${+id + 1}`} className="next" onClick={isOpenImage ? () => dispatch({ type: 'TOGGLE_MODAL', payload: {id: +id + 1, type: 'id'}}) : undefined} >
                        <span>Next</span>
                        <img src={theme === 'light' ? IconRightBlack : IconRightWhite} alt="right" />
                    </Link> :
                    <div className='disabled'>
                        <span>Next</span>
                        <img src={IconRightGrey} alt="right" />
                    </div>
                }
            </div>
        }
        </>
    )
}

export default PrevNext
