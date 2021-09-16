async function getImage(q) {
    const token = "jSBkwlBJNJAPvvdROdQuZQJehHyVaVOKJGCwIXqY";
    const url = `https://api.discogs.com/database/search?q=${q}&token=${token}`
    const response = await fetch(url);
    const data = await response.json()
    if (data.results[0] === undefined) {
        return  "https://source.unsplash.com/random/?muziek"
    } else {
        return data.results[0].cover_image
    }
}

export default getImage