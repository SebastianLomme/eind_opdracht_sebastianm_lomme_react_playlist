import AddSong from "./AddSong"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    Add: AddSong
    
})

export default allReducers