import React, {FC, ReactNode, useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import Post from '../Post'
import PrevNext from '../PrevNext'
import {IPost} from 'src/interfaces';
import { fetchData } from 'src/helpers'
import { StyledContainer } from './styled'
import './PageTemplate.css'

interface IPageTemplate {
    title: string,
    children: ReactNode,
    hasBack?: boolean,
    hasPrevNext?: boolean,
    hasNumbers?: boolean,
    type_header: 'authorized' | 'not authorized' | 'search',
}

interface IThemeContext {
    theme: 'light' | 'dark',
    toggleLightTheme: () => void,
    toggleDarkTheme: () => void,
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'light', toggleLightTheme: () => {}, toggleDarkTheme: () => {}});

const PageTemplate:FC<IPageTemplate> = ({title, children, hasBack, hasPrevNext, hasNumbers, type_header}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleLightTheme = () => setTheme('light');
    const toggleDarkTheme = () => setTheme('dark');

    const [posts, setPosts] = useState<IPost[]>([]);
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=30'
    useEffect(() => {
        fetchData(src, setPosts);
    }, []);

    const [search, setSearch] = useState('');
    console.log(search);

    const navigate = useNavigate();

    return (
        <ThemeContext.Provider value={{theme, toggleLightTheme, toggleDarkTheme}}>
            <StyledContainer theme={theme} className={theme === 'dark' ? 'dark' : ''}>
                <Header onSearchChange={(newValue) => setSearch(newValue)} type={type_header} />
                <main>
                    {hasBack && <a onClick={() => navigate('/blog')}>Back to home</a>}
                    <h1>{search ? `Search results '${search}'` : title}</h1>
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
        </ThemeContext.Provider>
    )
}

export default PageTemplate
