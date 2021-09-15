import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddSong } from "../actions/index";


function SongOverView() {
    const Songs = useSelector(state => state.AddSong)
    const dispatch = useDispatch()
    const array = Songs.map(song =>
        <li>
            Title: {song.title}
            Artiest: {song.artiest}
            Genre: {song.genre}
            Ratting: {}
        </li>)
    return (
        <div>
            <button onClick={() => dispatch(AddSong())}>Songs</button>
            {array}
        </div>
    )
}

export default SongOverView

