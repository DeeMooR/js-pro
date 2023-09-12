import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IUser } from "src/interfaces";

export const FETCH_POSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/blog/posts/?limit=30"
            );
            let jsonPosts = await response.json();
            let posts = jsonPosts.results;
            dispatch({ type: "SET_POSTS", payload: posts });
            return posts;
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
            .then((data) => {
                if (data.access) {
                    navigate("/blog");
                    console.log(data);
                    localStorage.setItem("access", data.access);
                }
            });
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};