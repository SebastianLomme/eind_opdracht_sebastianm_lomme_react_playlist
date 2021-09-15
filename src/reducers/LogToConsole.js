const LogToConsole = (state = "test", action) => {
    switch (action.type) {
        case "LOG":
            return action.payload;
        default: 
            return state
    }
}


export default LogToConsole