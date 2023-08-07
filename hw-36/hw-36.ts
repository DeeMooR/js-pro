interface IMovie {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string,
}

const movies: IMovie[] = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MVGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
    {
        id: 3,
        title: "Star Wars",
        year: 1977,
        released: "25 May 1977",
        runtime: "121 min",
        genre: ["Action", "Adventure", "Fantasy"],
        director: "George Lucas",
        writer: "George Lucas",
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot",
        country: "United States, United Kingdom",
        poster: "https://m.media-amazon.com/images/MkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        imdbRating: 8.6,
        imdbVotes: 1259440,
        type: "movie",
        boxOffice: "$460,998,507",
        production: "Lucasfilm Ltd.",
    },
    { 
        id: 4,
        title: "Harry Potter and the Half-Blood Prince",
        year: 2009,
        released: "15 Jul 2009",
        runtime: "153 min",
        genre: ["Action", "Adventure", "Family"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "As Harry Potter begins his sixth year at Hogwarts.",
        country: "United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BwOTg2ODg1Mg@@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 492245,
        type: "movie",
        boxOffice: "$302,305,431",
        production: "Heyday Films, Warner Bros.",
    }, 
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        released: "16 Nov 2001",
        runtime: "152 min",
        genre: ["Adventure", "Family", "Fantasy"],
        director: "Chris Columbus",
        writer: "J.K. Rowling, Steve Kloves",
        actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
        plot: "An orphaned boy enrolls in a school of wizardry.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 684604,
        type: "movie",
        boxOffice: "$318,087,620",
        production: "1492 Pictures, Heyday Films, Warner Brothers",
    }
]

// Task 1 - Собрать в массив все жанры фильмов (без повторения)
const getArrGenres = (movies: IMovie[]): string[] => {
    const arrGenres = movies.reduce((acc: string[], value: IMovie): string[] => {
        return [...acc, ...value.genre];
    }, []);
    return arrGenres.reduce((acc: string[], value: string): string[] => {
        if (!acc.includes(value)) acc.push(value);
        return acc;
    }, []);
}
console.log(getArrGenres(movies));


// Task 2 - Собрать в массив всех актеров всех фильмов (без повторения)
const getArrActors = (movies: IMovie[]): string[] => {
    const arrActors = movies.reduce((acc: string[], value: IMovie): string[] => {
        return [...acc, ...value.genre];
    }, []);
    return arrActors.reduce((acc: string[], value: string): string[] => {
        if (!acc.includes(value)) acc.push(value);
        return acc;
    }, []);
}
console.log(getArrActors(movies));


// Task 3 - Отсортировать фильмы по рейтингу по убыванию
const sortRating = (movies: IMovie[]): IMovie[] => {
    return movies.sort(({imdbRating: left}, {imdbRating: right}) => right - left);
}
console.log(sortRating(movies));


// Task 4 - Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot
type MovieNewObj = Pick<IMovie, 'id' | 'title' | 'released' | 'plot'>;
const getArrNewobj = (movies: IMovie[]): MovieNewObj[] => {
    return movies.map(({id, title, released, plot}): MovieNewObj => {
        return {
            id,
            title,
            released,
            plot,
        };
    });
}
console.log(getArrNewobj(movies));


// Task 5 - Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году выхода фильма.
const filterYear = (movies: IMovie[], num: number): IMovie[] => {
    return movies.filter(({year}): boolean => year === num);
}
console.log(filterYear(movies, 2009));


// Task 6 - Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.
const filterPartTitle = (movies: IMovie[], partTitle: string): IMovie[] => {
    return movies.filter(({title}): boolean => title.includes(partTitle));
}
console.log(filterPartTitle(movies, 'Harry Potter'));


// Task 7 - Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.
const filterPartTitleOrPlot = (movies: IMovie[], part: string): IMovie[] => {
    return movies.filter(({title, plot}): boolean => title.includes(part) || plot.includes(part));
}
console.log(filterPartTitleOrPlot(movies, 'Romanoff'));


// Task 8 - Создать функцию, которая бы принимала 3 параметра: массив фильмов, строка(название поля) и строка/число(значение поля). А результатом этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма.
type MovieKeys = keyof IMovie;
const filterPart = (movies: IMovie[], nameField: MovieKeys, valueField: string | number): IMovie[] => {
    return movies.filter((i: IMovie): boolean => i[nameField] === valueField);
}
console.log(filterPart(movies, 'year', 2011));