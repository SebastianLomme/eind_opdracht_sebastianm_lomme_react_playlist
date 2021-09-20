async function getImage(title, artist) {
    const token = "jSBkwlBJNJAPvvdROdQuZQJehHyVaVOKJGCwIXqY";
    const url = `https://api.discogs.com/database/search?release_title=${title}&artist=${artist}&token=${token}`
    const response = await fetch(url);
    const data = await response.json()
    if (data.results[0] === undefined) {
        return  "https://source.unsplash.com/random/?muziek"
    } else {
        return data.results[0].cover_image
    }
}

export default getImage