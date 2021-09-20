import React from "react";
import { SortSong, SortGenre } from "../actions";
import { useDispatch } from "react-redux";

const SortFunction = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(SortSong("a-z"))}>Sort a-z </button>
            <button onClick={() => dispatch(SortSong("z-a"))}>Sort z-a </button>
            <button onClick={() => dispatch(SortSong("1-5"))}>Sort 1-5 </button>
            <button onClick={() => dispatch(SortSong("5-1"))}>Sort 5-1 </button>
            <select onChange={(e) => dispatch(SortGenre(e.target.value))}>
                <option value="">All</option>
                <option value="Pop">Pop</option>
                <option value="Latino">Latino</option>

            </select>
        </div>
    )
}

export default SortFunction;