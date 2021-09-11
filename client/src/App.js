
// import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";
import { Nav } from "./Components/Nav";
import SignUp from "./Views/SignUp";


class App extends Component {

state = {
  session: false
}

render () {
  return (
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  };
};

export default App;