import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddSong } from "../actions";
import getImage from "./fetch";
import FormInput from "./FormInput"


function Form() {
    const dispatch = useDispatch()
    const [input, setInput] =
        useState({
            title: "",
            artiest: "",
            genre: "",
            rating: "5",
        })
    const handleInput = async (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        }
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (input.title !== "") {
            const img = await getImage(input.title, input.artiest)
            console.log("img: ", img)
            dispatch(AddSong({ ...input, img: img }))
            setInput({
                title: "",
                artiest: "",
                genre: "",
                rating: "5",
            })
        }

    }
    return (
        <div className="form-container">
            <FormInput handleInput={handleInput} handleSubmit={handleSubmit} input={input} />
        </div>
    )
}

export default Form