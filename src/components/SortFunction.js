import React from "react";
import { SortSong, SortGenre } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import OptionInput from "./OptionInput.js";
import { v4 as uuidv4 } from 'uuid';

const SortFunction = () => {
    const Songs = useSelector(state => state.Songs.songs);
    const dispatch = useDispatch();
    const filterGenreArray = [];
    Songs.forEach(song => !filterGenreArray.includes(song.genre) ? filterGenreArray.push(song.genre) : null);
    const listInputGenre = filterGenreArray.map(value =>
        <OptionInput
            value={value}
            key={uuidv4()}
        />);
    return (
        <div className="sort-form">
            <button onClick={() => dispatch(SortSong("a-z title"))}>Sorteer title a-z </button>
            <button onClick={() => dispatch(SortSong("z-a title"))}>Sorteer title z-a </button>
            <button onClick={() => dispatch(SortSong("a-z artiest"))}>Sorteer artiest a-z </button>
            <button onClick={() => dispatch(SortSong("z-a artiest"))}>Sorteer artiest z-a </button>
            <button onClick={() => dispatch(SortSong("1-5"))}>Sorteer op 1-5 </button>
            <button onClick={() => dispatch(SortSong("5-1"))}>Sorteer op 5-1 </button>
            <select onChange={(e) => dispatch(SortGenre(e.target.value))}>
                <option value="">All Genre</option>
                {listInputGenre}
            </select>
        </div>
    );
};

export default SortFunction;