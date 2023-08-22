import React, {FC, ReactNode, useState, useContext} from 'react'
import Header from '../Header'
import PrevNext from '../PrevNext'
import { ThemeContext } from 'src/App'
import { StyledContainer, StyledButton } from './styled'
import './PageTemplate.css'

interface IPageTemplate {
    title: string,
    children: ReactNode,
    noBack?: boolean,
    hasPrevNext?: boolean,
    hasNumbers?: boolean,
}

const PageTemplate:FC<IPageTemplate> = ({title, children, noBack, hasPrevNext, hasNumbers}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <StyledContainer theme={theme} className={theme === 'dark' ? 'dark' : ''}>
            <Header />
            <main>
                {noBack !== true && <a href='#'>Back to home</a>}
                <div className='title-wrapper'>
                    <h1>{title}</h1>
                    <StyledButton theme={theme} onClick={toggleTheme}>Toggle theme</StyledButton>
                </div>
                <div className='content'>{children}</div>
                {hasPrevNext ? 
                    (hasNumbers ? <PrevNext hasNumbers /> : <PrevNext />) 
                : null}
            </main>
            <footer>
                <span>2022</span>
                <span>All right reserved</span>
            </footer>
        </StyledContainer>
    )
}

export default PageTemplate
