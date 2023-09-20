import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import PageTemplate from 'src/components/PageTemplate'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { CREATE_USER, SIGN_IN } from 'src/actions/actions';
import { Link, useNavigate } from 'react-router-dom';
import { addPost } from 'src/helpers';
import "./AddPost.css"

const AddPost = () => {
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [lesson_num, setLesson_num] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();
    
 
    return (
        <PageTemplate title='Add Post' hasBack type_header='authorized'>
            <form>
                <Input type='file' label='File' placeholder='Your file' value={image} handleChange={setImage} />
                <Input type='text' label='Text' placeholder='Your text' value={text} handleChange={setText} />
                <Input type='text' label='Lesson_num' placeholder='Your Lesson_num' value={lesson_num} handleChange={setLesson_num} />
                <Input type='text' label='Title' placeholder='Your title' value={title} handleChange={setTitle} />
                <Input type='text' label='Description' placeholder='Your description' value={description} handleChange={setDescription} />

                <Button text='Add Post' handleClick={() => addPost({image: `${image};type=image/jpeg`, text, lesson_num, title, description})} isReboot />
                <Link to='/my-posts' className='my-posts'>Show My posts</Link>
            </form>
        </PageTemplate>
    )
}

export default AddPost
