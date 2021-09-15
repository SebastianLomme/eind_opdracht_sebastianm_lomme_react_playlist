const AddSong = (state = [], action) => {
    const array = [...state, action.payload]
    switch (action.type) {
        case "ADDSONG":
            return array;
        default:
            return state;
    }
}


export default AddSong