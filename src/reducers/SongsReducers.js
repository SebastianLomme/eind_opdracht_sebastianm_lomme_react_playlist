import data from "../components/playListData"

const initialState = {
    songs: data,
    sortBy: "a-z",
    filterBy: [],
    filter: ""
}

const Songs = (state = initialState, action) => {
    switch (action.type) {
        case "ADDSONG":
            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        case "SORT_SONGS":
            return {
                ...state,
                sortBy: action.payload,
            }
        case "DELETE_ID":
            const newArray = state.songs.filter(item => item.id !== Number(action.payload))
            const newFilterArray = state.filter ? state.filter.filter(item => item.id !== Number(action.payload)) : ""
            return {
                ...state,
                songs: newArray,
                filter: newFilterArray,
            }
        case "SORT_GENRE":
            const genreArray = state.songs.filter(item => item.genre === action.payload)
            if (genreArray.length === 0) {
                return {
                    ...state,
                    filter: "",
                }
            } else {
                return {
                    ...state,
                    filter: genreArray
                }
            }
        default:
            return state;
    }
}

export default Songs