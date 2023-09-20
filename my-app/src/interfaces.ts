export interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number,
    isFavorite: boolean,
    isLike: boolean,
    isDislike: boolean
}

export interface IUser {
    username: string,
    email: string,
    password: string
}

export interface IAddPost {
    image: string,
    text: string,
    lesson_num: number,
    title: string,
    description: string
}