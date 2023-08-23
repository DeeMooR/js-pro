import React, {FC, useContext} from 'react'
import { ThemeContext } from 'src/App'
import './PrevNext.css' 

import IconLeftBlack from "src/icons/left.png"
import IconRightBlack from "src/icons/right.png"
import IconLeftWhite from "src/icons/left-white.png"
import IconRightWhite from "src/icons/right-white.png"

interface ISignInUp {
    hasNumbers?: boolean,
}

const PrevNext:FC<ISignInUp> = ({hasNumbers}) => {
    const {theme} = useContext(ThemeContext);
    const pageNumbers = ['1', '2', '3', '...', '8'];

    return (
        <div className='prev-next'>
            <a href='#' className="prev">
                <img src={theme === 'light' ? IconLeftBlack : IconLeftWhite} alt="left" />
                <span>Prev</span>
            </a>
            {hasNumbers === true &&
                <div className="prev-next__numbers">
                    {pageNumbers.map(value => <a href="#">{value}</a>)}
                </div>
            }
            <a href='#' className="next">
                <span>Next</span>
                <img src={theme === 'light' ? IconRightBlack : IconRightWhite} alt="right" />
            </a>
        </div>
    )
}

export default PrevNext
