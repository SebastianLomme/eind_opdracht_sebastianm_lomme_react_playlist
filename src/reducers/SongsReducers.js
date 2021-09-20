import data from "../components/playListData"

const initialState = {
    isLoading: true,
    songs: data,
    sortBy: "a-z" 
}

const Songs = (state = initialState, action) => {
    switch (action.type) {
        case "ADDSONG":
            return {
                ...state,
                isLoading: false,
                songs: [...state.songs, action.payload]
            };
        case "SORT_SONGS":
            return {
                ...state,
                sortBy: action.payload,
            }
        case "DELETE_ID":
            const newArray = state.songs.filter(item => item.id !== Number(action.payload))
            return {
                ...state,
                songs: newArray
            }
        case "SORT_GENRE":
            const genreArray = state.songs.filter(item => item.genre === action.payload)
            console.log(genreArray)
            return {
                ...state,
                songs: genreArray
            }
        default:
            return state;
    }
}

export default Songs