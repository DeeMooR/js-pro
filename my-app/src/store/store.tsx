import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import { IPost } from 'src/interfaces';

const initialState = {
    count: 0,
    theme: 'light',
    modalInfo: {
        isOpenPost: false,
        isOpenImage: false,
        id: null
    },
    posts: [],
    navigation: 'All'
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_THEME':  {
            return {
                ...state,
                theme: action.payload,
            };
        }
        case 'TOGGLE_MODAL':  {
            const { id, type } = action.payload;
            if (type === 'post') {
                return {
                    ...state,
                    modalInfo: {
                        isOpenPost: !state.modalInfo.isOpenPost,
                        isOpenImage: state.modalInfo.isOpenImage,
                        id: id
                    }
                };
            } else if (type === 'image') {
                return {
                    ...state,
                    modalInfo: {
                        isOpenPost: state.modalInfo.isOpenPost,
                        isOpenImage: !state.modalInfo.isOpenImage,
                        id: id
                    }
                };
            } else if (type === 'id') {
                console.log(id);
                return {
                    ...state,
                    modalInfo: {
                        isOpenPost: state.modalInfo.isOpenPost,
                        isOpenImage: state.modalInfo.isOpenImage,
                        id: id
                    }
                };
            } else return {
                ...state,
                modalInfo: {
                    isOpenPost: false,
                    isOpenImage: false,
                    id: id
                }
            };
        }
        case 'SET_POSTS':  {
            return {
                ...state,
                posts: action.payload.map((post: IPost) => ({
                    ...post,
                    isFavorite: false,
                    addLike: false,
                    addDislike: false,
                }))
            };
        }
        case 'SET_LIKE':  {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.id === action.payload) {
                        post.isLike = !post.isLike;
                    }
                    return post;
                })
            };
        }
        case 'SET_DISLIKE':  {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.id === action.payload) {
                        post.isDislike = !post.isDislike;
                    }
                    return post;
                })
            };
        }
        case 'TOGGLE_NAVIGATION':  {
            return {
                ...state,
                navigation: action.payload,
            };
        }
        case 'SET_FAVORITE':  {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.id === action.payload) {
                        post.isFavorite = !post.isFavorite;
                    }
                    return post;
                })
            };
        }
        default:
            return state;
    }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;