export const fetchData = (src: string, setPosts: Function) => {
    fetch(src)
    .then(response => {
        if (response.ok) return response.json();
    })
    .then(json => {
        setPosts(json.results);
    });
};