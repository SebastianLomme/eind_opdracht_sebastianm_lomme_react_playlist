import data from "../components/playListData"

const initialState = {
    isLoading: true,
    songs: data
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
            const newArray = [...action.payload]
            console.log("new: ", newArray)
            const sortArray = newArray.sort((a, b) => {
                const aTitle = a.title.toLowerCase()
                const bTitle = b.title.toLowerCase()
                if (aTitle < bTitle) {
                    return -1
                }
                if (aTitle > bTitle) {
                    return 1
                }
                return 0
            })
            console.log("Sort: ", sortArray)
            return {
                ...state,
                songs: [...sortArray]
            }
        default:
            return state;
    }
}

export default Songs