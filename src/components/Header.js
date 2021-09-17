import React from "react";
import {useSelector} from "react-redux"

function Header() {
    const Loading = useSelector(state => state.Add.isLoading)
    return (
        <header>
            <h1>Favoriete afspeeltijst</h1>
            {Loading ? <p>Loading....</p> : null}
        </header>
    )
}

export default Header