import React from 'react'
import Tabs from './Tabs'
import './Navigation.css'

const Header = () => {
    return (
        <div className='navigation'>
            <nav >
                <Tabs />
            </nav>
            <hr />
        </div>
    )
}

export default Header
