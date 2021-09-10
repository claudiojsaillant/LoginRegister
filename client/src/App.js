
// import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";
import SignUp from "./Views/SignUp";

class App extends Component {

state = {
  session: false
}

render () {
  return (
      <Router>
        <Switch>
          <Route exact path="/SignIn" component={SignUp} />
        </Switch>
      </Router>
    );
  };
};

export default App;