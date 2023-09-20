import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IUser } from "src/interfaces";
import instance from "src/axiosConfig";

export const FETCH_POSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            instance.get('/blog/posts/?limit=10')
            .then((data) => {
                const posts = data.data.results;
                dispatch({ type: "SET_POSTS", payload: posts });
            })
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }


    };
};

export const CREATE_USER = (payload: IUser) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let activate = await fetch(
                "https://studapi.teachmeskills.by/auth/users/",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(activate);
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const CREATE_PAGEPOST = (id: string) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let postData = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/${id}/`
            )
            .then((postData) => postData.json())
            .then((postData) => {
                dispatch({ type: "SET_PAGEPOST", payload: postData });
            });
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const ACTIVATE_USER = (navigate: any, uid: string, token: string) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/auth/users/activation/",
                {
                    method: "POST",
                    body: JSON.stringify({ uid, token }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            ).then(() => {
                navigate("/success");
            });
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const SIGN_IN = (navigate: any, email: string, password: string) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/auth/jwt/create/",
                {
                    method: "POST",
                    body: JSON.stringify({ email, password }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((data) => data.json())
            .then(({access, refresh}) => {
                if (access) {
                    navigate("/blog");
                    console.log({access, refresh});
                    localStorage.setItem("access", access);
                    localStorage.setItem("refresh", refresh);
                }
            });
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const GET_MYPOSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });
        try {
            let token = localStorage.getItem("access");
            fetch(
                "https://studapi.teachmeskills.by/blog/posts/my_posts/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((myposts) => myposts.json())
            .then((myposts) => {
                let posts = myposts.results;
                dispatch({ type: "SET_MY_POSTS", payload: posts });
            })
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};