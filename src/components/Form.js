import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddSong } from "../actions"
import getImage from "./fetch"

function Form() {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.AddSong)
    const [input, setInput] = useState({})
    const image = getImage(input.artiest)
    console.log("input 1", input.title)
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
            id: songs.length + 1,
        }
        )
    }
    return (
        <div className="form-container">
            <form onSubmit={async (e) => {
                e.preventDefault()
                setInput({
                    ...input,
                    img: await image
                })
                dispatch(AddSong(input))
            }}>
                <label htmlFor="title">Title: </label>
                <input id="title" name="title" type="text" onChange={handleInput} />
                <label htmlFor="artiest" >Artiest: </label>
                <input id="artiest" name="artiest" type="text" onChange={handleInput} />
                <label htmlFor="genre" >Genre: </label>
                <input id="genre" type="text" name="genre" onChange={handleInput} />
                <label htmlFor="ratting" >Ratting:</label>
                <select id="ratting" name="ratting" onChange={handleInput}>
                    <option value="star 1">star 1</option>
                    <option value="star 2">star 2</option>
                    <option value="star 3">star 3</option>
                    <option value="star 4">star 4</option>
                    <option value="star 5">star 5</option>
                </select>
                <button>Songs</button>
            </form>
        </div>
    )
}

export default Form