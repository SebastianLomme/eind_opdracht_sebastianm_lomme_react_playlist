export const logName = (name, age) => {
    return {
        type: "LOG",
        payload: {
            Name: name,
            age: age
        }
    }
}

export const AddSong = () => {
    return {
        type: "ADDSONG", 
        payload: {
            title: "duurt te lang",
            artiest: "davida",
            genre: "pop",
            ratting: "5 ster "
        }
    }
}