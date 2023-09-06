// export const INCREMENT_CREATOR = (payload: number) => (
//     { type: 'INCREMENT', payload }
// )

import { IUser } from "src/interfaces";

export const FETCH_POSTS = () => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });

        try {
            let response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=30');
            let jsonPosts = await response.json();
            let posts = jsonPosts.results;
            dispatch({ type: 'SET_POSTS', payload: posts });
            return posts;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: 'SET_LOADING' })
        }
    }
}

export const CREATE_USER = (payload: IUser) => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });

        try {
            let response = await fetch('https://studapi.teachmeskills.by/auth/users', {method: 'POST', body: JSON.stringify(payload)});
            console.log(response)
            let jsonUser = await response.json();
            let user = jsonUser.results;
            // dispatch({ type: 'SET_USER', payload: posts });
            return user;
        } catch (err) {
            console.log(err);
        } finally {
            // dispatch({ type: 'SET_LOADING' })
        }
    }
}