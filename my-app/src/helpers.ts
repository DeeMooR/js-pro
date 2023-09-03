export const fetchPosts = async () => {
    const src = 'https://studapi.teachmeskills.by/blog/posts/?limit=30'
    let responce = await fetch(src);
    let jsonPosts = await responce.json();
    return jsonPosts.results;
}