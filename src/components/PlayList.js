import React from 'react'
import SortFunction from "./SortFunction";
import Form from "./Form"
import SongOverView from "./SongOverview"

function PlayList() {
    return (
        <div>
            <div className="form-section">
                <SortFunction />
                <Form />
            </div>
            <SongOverView />
        </div>
    )
}

export default PlayList
