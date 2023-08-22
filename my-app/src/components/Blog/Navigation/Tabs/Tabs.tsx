import React from 'react'
import Tab from './Tab'

const Tabs = () => {
    return (
        <>
        <Tab text='All' isActive/>
        <Tab text='My favorites'/>
        <Tab text='Popular' isDisabled/>
        </>
    )
}

export default Tabs
