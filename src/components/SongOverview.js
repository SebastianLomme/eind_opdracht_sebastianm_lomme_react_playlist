import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


function SongOverView() {
    const Songs = useSelector(state => state.AddSong)
    const array = Songs.map(song => {
        return (
            <div className="song-container" key={uuidv4()}>
                <h3>
                    Title: {song.title}
                </h3>
                <h4>
                    Artiest: {song.artiest}
                </h4>
                <p>
                    Genre: {song.genre}
                </p>
                <p>
                    Ratting: {song.ratting}
                </p>
                <img className="cover-image" src={song.img} alt={song.title} />
        </div >
        )

    })
    return (
        <div>
            {array}
        </div>
    )
}

export default SongOverView

