import React from "react";
import { SortSong } from "../actions";
import { useDispatch, useSelector } from "react-redux";


const SortFunction = () => {
    const Songs = useSelector(state => state.Songs.songs)
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()
    console.log(Songs)
    return (
        <button onClick={() => dispatch(SortSong(Songs))}>Sort</button>
    )
}

export default SortFunction