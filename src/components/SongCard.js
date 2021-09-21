import React from 'react';
import { DeleteId } from "../actions/";
import { useDispatch } from "react-redux";


function SongCard(props) {
    const dispatch = useDispatch();
    const { song } = props;
    return (
        <div>
            <div className="song-container">
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
                <button className="delete-btn" onClick={(e) => dispatch(DeleteId(e.target.id))} id={song.id} >Delete</button>
            </div >
        </div>
    );
};

export default SongCard;
