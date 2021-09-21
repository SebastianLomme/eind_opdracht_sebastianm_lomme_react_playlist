import React from "react";
import Header from "./components/Header";
import PlayList from "./components/PlayList";
import Nav from "./components/Nav";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact >
            <PlayList />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;


