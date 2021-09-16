import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logName } from "../actions/index";
const array = ["Sebastian", 31]

function Header() {
    const log = useSelector(state => state.LogToConsole)
    const dispatch = useDispatch()
    return (
        <header>
            <h1 onClick={() => dispatch(logName(...array))}>Favoriete afspeeltijst {log.Name}</h1>
        </header>
    )
}

export default Header