import React from "react";
import { useSelector } from "react-redux";
import  SortFunction  from "./SortFunction";

function Header() {
    const Loading = useSelector(state => state.Songs.isLoading)
    return (
        <header>
            <h1>Favoriete afspeeltijst</h1>
            {Loading ? <p>Loading....</p> : null}
            <SortFunction />
        </header>
    )
}

export default Header