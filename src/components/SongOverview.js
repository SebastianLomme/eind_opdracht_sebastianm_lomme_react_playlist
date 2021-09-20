import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


function SongOverView() {
    const Songs = useSelector(state => state.Songs.songs)
    console.log("Songs: ",Songs)
    const array = Songs.map(song => {
        return (
            <div className="song-container" key={uuidv4()}>
                {song.title ? <h3>
                    Title: {song.title}
                </h3> : null}
                {song.artiest ? <h4>
                    Artiest: {song.artiest}
                </h4> : null}
                {song.genre ? <p>
                    Genre: {song.genre}
                </p> : null}
                {song.rating ? <p>
                    Rating: {song.rating}
                </p> : null}
                <img className="cover-image" src={song.img} alt={song.title} />
            </div >
        )
    })
    return (
        <div className="songs-overview">
            {array}
        </div>
    )
}

export default SongOverView

