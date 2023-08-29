import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
    count: 0,
    theme: 'light',
    modalInfo: {
        isOpenPost: false,
        isOpenImage: false,
        id: null
    }
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
        default:
            return state;
    }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;