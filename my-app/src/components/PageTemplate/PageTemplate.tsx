import React, {FC, ReactNode, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header'
import Post from '../Post'
import PrevNext from '../PrevNext'
import Modal from '../Modal';
import { StyledContainer } from './styled'
import './PageTemplate.css'
import { IPost } from 'src/interfaces';
import Loader from '../Loader';
import instance from 'src/axiosConfig';


interface IPageTemplate {
    title: string,
    children: ReactNode,
    hasBack?: boolean,
    hasPrevNext?: boolean,
    hasNumbers?: boolean,
    type_header: 'authorized' | 'not authorized' | 'search',
}

const PageTemplate:FC<IPageTemplate> = ({title, children, hasBack, hasPrevNext, hasNumbers, type_header}) => {
    const posts: IPost[] = useSelector(({posts}) => posts);
    const theme = useSelector(({theme}) => theme);
    const isLoading = useSelector(({isLoading}) => isLoading);
    const isOpenPost = useSelector(({modalInfo}) => modalInfo.isOpenPost);
    const isOpenImage = useSelector(({modalInfo}) => modalInfo.isOpenImage);

    const [search, setSearch] = useState('');
    const navigate = useNavigate();
  
    const [searchPosts, setSearchPosts] = useState<IPost[]>([])

    useEffect(() => {
        instance.get(`/blog/posts/?search=${search}&limit=100`)
        .then((data) => {
            console.log(data);
            setSearchPosts(data.data.results);
        });
        if (search) navigate(`/blog/?search=${search}&limit=100`)
        // else navigate('/blog');
    }, [search])

    return (
        <StyledContainer theme={theme} className={theme === 'dark' ? 'dark' : ''}>
            <Header onSearchChange={(newValue) => setSearch(newValue)} type={type_header} />
            <main>
                {hasBack && <a onClick={() => navigate('/blog')}>Back to home</a>}
                <h1>{search ? `Search results '${search}'` : title}</h1>
                {search ?
                    searchPosts.map((value, i) => <Post key={i} obj={value} type='search' />)
                : <div className='content'>{isLoading ? <Loader /> : children}</div>}

                {hasPrevNext || search ?
                    (hasNumbers ? <PrevNext hasNumbers /> : <PrevNext />) 
                : null}
            </main>
            <footer>
                <span>2022</span>
                <span>All right reserved</span>
            </footer>

            {(isOpenPost || isOpenImage) && <Modal />}
        </StyledContainer>
    )
}

export default PageTemplate
