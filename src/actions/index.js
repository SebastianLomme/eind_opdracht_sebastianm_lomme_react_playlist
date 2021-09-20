export const AddSong = (object) => {
    return {
        type: "ADDSONG", 
        payload: object,
    }
}

export const SortSong = (sortBy) => {
    return {
        type: "SORT_SONGS",
        payload: sortBy,
    }
}
