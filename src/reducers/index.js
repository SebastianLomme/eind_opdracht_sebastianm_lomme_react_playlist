import LogToConsole from "./LogToConsole"
import AddSong from "./AddSong"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    LogToConsole,
    AddSong
})

export default allReducers