import React, {FC, ReactNode, useState, useContext, useEffect} from 'react'
import Header from '../Header'
import Post from '../Post'
import PrevNext from '../PrevNext'
import {IPost} from 'src/interfaces';
import { fetchData } from 'src/helpers'
import { ThemeContext } from 'src/App'
import { StyledContainer, StyledButton } from './styled'
import './PageTemplate.css'

interface IPageTemplate {
    title: string,
    children: ReactNode,
    hasBack?: boolean,
    hasPrevNext?: boolean,
    hasNumbers?: boolean,
}

const PageTemplate:FC<IPageTemplate> = ({title, children, hasBack, hasPrevNext, hasNumbers}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const [posts, setPosts] = useState<IPost[]>([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=30'
    useEffect(() => {
        fetchData(src, setPosts);
    }, []);

    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <StyledContainer theme={theme} className={theme === 'dark' ? 'dark' : ''}>
            <Header onSearchChange={(newValue) => setSearch(newValue)}/>
            <main>
                {hasBack && <a href='#'>Back to home</a>}
                <div className='title-wrapper'>
                    <h1>{search ? `Search results '${search}'` : title}</h1>
                    <StyledButton theme={theme} onClick={toggleTheme}>Toggle theme</StyledButton>
                </div>
                {search ?
                    posts.filter((value) => value.title.includes(search))
                    .map((value, i) => <Post key={i} obj={value} type='search' />)
                : <div className='content'>{children}</div>}

                {hasPrevNext || search ?
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
