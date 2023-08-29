import React, {useContext, MouseEvent} from 'react'
import { StyledModal } from './styled'
import { useSelector, useDispatch } from 'react-redux';
import { PostsContext } from 'src/App';
import Post from '../Post';
import PrevNext from '../PrevNext';
import './Modal.css';

import IconCrossBlack from "src/icons/cross.png";
import IconCrossWhite from "src/icons/cross-white.png";


const Modal = () => {
    const theme = useSelector(({theme}) => theme);
    const isOpenPost = useSelector(({modalInfo}) => modalInfo.isOpenPost);
    const isOpenImage = useSelector(({modalInfo}) => modalInfo.isOpenImage);
    const id = useSelector(({modalInfo}) => modalInfo.id);
    const {posts} = useContext(PostsContext);


    const dispatch = useDispatch();

    document.body.style.overflowY = 'hidden';
    document.body.style.padding = '0 17px 0 0';

    const clickCross = () => {
        dispatch({type: 'TOGGLE_MODAL', payload: {id: id}});
        document.body.style.overflowY = 'auto';
        document.body.style.padding = '0';
    }
    const clickBackground = (event: MouseEvent) => {
        if (event.target === event.currentTarget) clickCross();
    };

    return (
        <div className="modal__container" onClick={clickBackground}>
            <StyledModal theme={theme}>
                <img src={theme === 'light' ? IconCrossBlack : IconCrossWhite} className='modal__cross' onClick={clickCross} alt="cross" />
                {isOpenPost && <Post key={id - 1} obj={posts[id - 1]} type='big' />}
                {isOpenImage && 
                    <div className="modal__image">
                        <img src={posts[id - 1].image} alt="image" />
                        <div><PrevNext /></div>
                    </div>
                }
            </StyledModal>
        </div>
  )
}

export default Modal
