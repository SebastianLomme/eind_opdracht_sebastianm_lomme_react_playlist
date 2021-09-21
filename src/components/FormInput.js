import React from "react";

function FormInput(props) {
    const { handleSubmit, handleInput, input } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" name="title" type="text" onChange={handleInput} value={input.title} />
            <label htmlFor="artiest" >Artiest: </label>
            <input id="artiest" name="artiest" type="text" onChange={handleInput} value={input.artiest} />
            <label htmlFor="genre" >Genre: </label>
            <input id="genre" type="text" name="genre" onChange={handleInput} value={input.genre} />
            <label htmlFor="rating" >Rating:</label>
            <select id="rating" name="rating" onChange={handleInput} value={input.rating}>
                <option value="5">star 5</option>
                <option value="4">star 4</option>
                <option value="3">star 3</option>
                <option value="2">star 2</option>
                <option value="1">star 1</option>
            </select>
            <button type="submit" >Songs</button>
        </form>
    );
};

export default FormInput;