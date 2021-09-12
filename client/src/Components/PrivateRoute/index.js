import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "../../Utilities/sessionManger";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  // This function only renders the component if the user is authentificated else it redirects to LogIn view
  <Route
    {...rest}
    render={props =>
      getSession() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);