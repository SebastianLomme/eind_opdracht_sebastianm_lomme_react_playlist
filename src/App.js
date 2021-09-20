import React from "react"
import Header from "./components/Header"
import SongOverView from "./components/SongOverview"
import Form from "./components/Form"
import SortFunction from "./components/SortFunction"

function App() {
  return (
    <div className="App">

      <Header />
      <Form />
      <SortFunction />
      <SongOverView />
      
    </div>
  );
}

export default App;
