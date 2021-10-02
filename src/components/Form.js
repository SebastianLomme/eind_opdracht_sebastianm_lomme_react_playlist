import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddSong } from "../actions";
import getImage from "./fetch";
import FormInput from "./FormInput";
import { v4 as uuidv4 } from 'uuid';


function Form() {
    const dispatch = useDispatch();
    const [input, setInput] =
        useState({
            title: "",
            artiest: "",
            genre: "",
            rating: "5",
        });
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        }
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.title !== "") {
            const img = await getImage(input.title, input.artiest);
            const newSong = {
                id: uuidv4(),
                ...input,
                img: img,
            };
            dispatch(AddSong(newSong));
            setInput({
                title: "",
                artiest: "",
                genre: "",
                rating: "5",
            });
        };
    };
    return (
        <div className="form-container">
            <FormInput handleInput={handleInput} handleSubmit={handleSubmit} input={input} />
        </div>
    );
};

export default Form;