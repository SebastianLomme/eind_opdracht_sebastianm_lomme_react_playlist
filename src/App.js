import React from "react"
import Header from "./components/Header"
import SongOverView from "./components/SongOverview"
import Form from "./components/Form"
import { useSelector, useDispatch } from "react-redux"
import {IsLoading} from "./actions"

function App() {
  const loading = useSelector(state => state.Songs.isLoading)
  const dispatch = useDispatch()
  console.log("State: ", loading)
  dispatch(IsLoading(false))
  return (
    <div className="App">
      <Header />
      <Form />
      <SongOverView />

    </div>
  );
}

export default App;
