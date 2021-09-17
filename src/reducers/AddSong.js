import data from "../components/playListData"

console.log(data)

const initialState = {
    isLoading: true,
    songs: data
}

const AddSong = (state = initialState, action) => {
    switch (action.type) {
        case "ADDSONG":
            return {
                ...state,
                isLoading: false,
                songs: [...state.songs ,action.payload]
            };
        default:
            return state;
    }
}

export default AddSong