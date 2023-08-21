import React, {FC, ReactNode, useState} from 'react'
import Header from '../Header'
import './PageTemplate.css'

interface IPageTemplate {
    title: string,
    children: ReactNode,
    noBack?: boolean,
}

const PageTemplate:FC<IPageTemplate> = ({title, children, noBack}) => {
    const [isDark, setIsDark] = useState(false);

  return (
    <div className={`pageTemplate ${isDark ? 'dark' : ''}`}>
        <Header isDark={isDark} />
        <main>
            {noBack !== true && <a href='#' className='back'>Back to home</a>}
            <h1>{title}</h1>
            <div className='content'>{children}</div>
        </main>
        <footer>
            <span>2022</span>
            <span>All right reserved</span>
        </footer>
    </div>
  )
}

export default PageTemplate
