
const AddSong = (state = [], action) => {
    console.log("state AddSong", state)
    const array =
        [...state, action.payload]
console.log("array AddSong", array)
    switch (action.type) {
        case "ADDSONG":
            return array;
        default:
            return state;
    }
}


export default AddSong