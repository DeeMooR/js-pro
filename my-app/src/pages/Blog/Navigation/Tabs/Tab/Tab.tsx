import React, {FC} from 'react'
import './Tab.css'

interface ITAb {
    text: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

const Tab:FC<ITAb> = ({text, isActive, isDisabled}) => {
    return (
        <a href='#' className={`${isActive ? 'active' : ''}${isDisabled ? 'disabled': ''}`}>{text}</a>
    )
}

export default Tab
