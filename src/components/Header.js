import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logName } from "../actions/index";
const array = ["Sebastian", 31]

function Header() {
    const log = useSelector(state => state.LogToConsole)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 onClick={() => dispatch(logName(...array))}>Hello {log.Name}</h1>
            <p>Age: {log.age}</p>
        </div>
    )
}

export default Header