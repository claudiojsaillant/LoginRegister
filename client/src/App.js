
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
import Homepage from "./Views/Homepage"
import About from "./Views/About"
import { getSession } from "./Utilities/sessionManger";
import { PrivateRoute } from "./Components/PrivateRoute";
import { PublicRoute } from "./Components/PublicRoute"

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
          <Route exact path="/About" component={About} />
          <PublicRoute exact path="/" component={Homepage} />
          <PublicRoute exact path="/SignUp" component={SignUp} />
          <PublicRoute exact path="/LogIn" component={LogIn} />
          <PrivateRoute exact path="/Home" component={Home} />
        </Switch>
      </Router>
    );
  };
};

export default App;