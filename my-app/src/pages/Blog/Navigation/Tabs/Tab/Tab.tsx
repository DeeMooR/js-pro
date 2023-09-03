import React, {FC} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Tab.css'

interface ITAb {
    text: string;
    isDisabled?: boolean;
}

const Tab:FC<ITAb> = ({text, isDisabled}) => {
    const navigation = useSelector(({navigation}) => navigation);
    const dispatch = useDispatch();

    const clickTab = () => {
        dispatch({ type: 'TOGGLE_NAVIGATION', payload: text})
    }

    return (
        <a href='#' className={`${navigation === text ? 'active' : ''}${isDisabled ? 'disabled': ''}`} onClick={clickTab}>{text}</a>
    )
}

export default Tab
