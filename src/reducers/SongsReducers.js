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
        default:
            return state;
    }
}

export default Songs