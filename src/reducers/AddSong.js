
const AddSong = (state = [], action) => {
    switch (action.type) {
        case "ADDSONG":
            const array =
                [...state, action.payload]
            console.log("array",array)
            return array;
        default:
            return state;
    }
}

export default AddSong