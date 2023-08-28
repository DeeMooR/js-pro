import React, {FC, ReactNode, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import Post from '../Post'
import PrevNext from '../PrevNext'
import { PostsContext } from 'src/App';
import { ThemeContext } from 'src/App';
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

const PageTemplate:FC<IPageTemplate> = ({title, children, hasBack, hasPrevNext, hasNumbers, type_header}) => {
    const {theme} = useContext(ThemeContext);
    const {posts} = useContext(PostsContext);

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
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
    )
}

export default PageTemplate
