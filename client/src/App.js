
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
import LogIn from "./Views/LogIn"


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
          <Route exact path="/LogIn" component={LogIn} />
        </Switch>
      </Router>
    );
  };
};

export default App;