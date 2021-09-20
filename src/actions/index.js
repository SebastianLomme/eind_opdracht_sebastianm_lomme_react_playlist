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

export const DeleteId = (id) => {
    return {
        type: "DELETE_ID",
        payload: id,
    }
}

export const SortGenre = (genre) => {
    return {
        type: "SORT_GENRE",
        payload: genre,
    }
}

export const IsLoading = (loading) => {
    return {
        type: "IS_LOADING",
        payload: loading,
    }
}