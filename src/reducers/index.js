import SongsReducers from "./SongsReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    Songs: SongsReducers,
});

export default allReducers;