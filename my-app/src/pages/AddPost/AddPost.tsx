import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import ImageUploading from 'react-images-uploading';
import PageTemplate from "src/components/PageTemplate";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { CREATE_POST } from "src/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { addPost } from "src/helpers";

import "./AddPost.css";

const AddPost = () => {
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [lesson_num, setLesson_num] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList: any, addUpdateIndex: any) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <PageTemplate title="Add Post" hasBack type_header="authorized">
            <form className="add-post__form">
                <Input
                    type="text"
                    label="Title"
                    placeholder="Your title"
                    value={title}
                    handleChange={setTitle}
                />
                <div className="flex-lesson-image">
                    <Input
                        type="text"
                        label="Lesson_num"
                        placeholder="Your Lesson_num"
                        value={lesson_num}
                        handleChange={setLesson_num}
                    />
                    {/* <Input type='file' label='File' placeholder='Your file' value={image} handleChange={setImage} /> */}

                    <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
                </div>
                <Input
                    type="text"
                    label="Description"
                    placeholder="Your description"
                    value={description}
                    handleChange={setDescription}
                />
                <Input
                    type="text"
                    label="Text"
                    placeholder="Your text"
                    value={text}
                    handleChange={setText}
                />
                <div className="add-post__buttons">
                    {/* <a href="#" className='add-post__delete'>Delete post</a> */}
                    <Link to="/my-posts" className="my-posts">
                        My posts
                    </Link>
                    <Button text="Cancel" />
                    <Button
                        text="Add Post"
                        handleClick={() =>
                            dispatch(
                                CREATE_POST({
                                    image,
                                    text,
                                    lesson_num,
                                    title,
                                    description,
                                })
                            )
                        }
                        isReboot
                    />
                </div>
            </form>
        </PageTemplate>
    );
};

export default AddPost;
