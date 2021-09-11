
// import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Nav } from "./Components/Nav";
import SignUp from "./Views/SignUp";
import LogIn from "./Views/LogIn";
import Home from "./Views/Home";
import { getSession } from "./Utilities/sessionManger";
import { PrivateRoute } from "./Components/PrivateRoute";


class App extends Component {

state = {
  session: undefined
}

componentDidMount() {
  let obj = getSession();
  if (obj) {
    this.setState({ session: obj.id });
  }
}

render () {
  return (
      <Router>
        <Nav session={this.state.session}/>
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/LogIn" component={LogIn} />
          <PrivateRoute exact path="/Home" component={Home} />
        </Switch>
      </Router>
    );
  };
};

export default App;