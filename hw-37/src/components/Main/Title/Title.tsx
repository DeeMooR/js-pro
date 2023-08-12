import React, {ReactNode} from 'react'
import './Title.css'

interface ITitle {
    children: ReactNode;
}

const Title = ({children}: ITitle) => {
    return (
        <p className="title">{children}</p>
    )
}

export default Title
