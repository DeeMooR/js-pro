import React from 'react'
import './PrevNext.css' 

const pageNumbers = ['1', '2', '3', '...', '8']

const PrevNext = () => {
  return (
    <div className='prev-next'>
        <a href='#' className="prev">
            <img src={require('../../icons/left.png')} alt="left" />
            <span>Prev</span>
        </a>
        <div className="prev-next__numbers">
            {pageNumbers.map(value => <a href="#">{value}</a>)}
        </div>
        <a href='#' className="next">
            <span>Next</span>
            <img src={require('../../icons/right.png')} alt="right" />
        </a>
    </div>
  )
}

export default PrevNext
