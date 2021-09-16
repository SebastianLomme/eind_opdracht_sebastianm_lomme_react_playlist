export const logName = (name, age) => {
    return {
        type: "LOG",
        payload: {
            Name: name,
            age: age
        }
    }
}

export const AddSong = (object) => {
    return {
        type: "ADDSONG", 
        payload: object
    }
}