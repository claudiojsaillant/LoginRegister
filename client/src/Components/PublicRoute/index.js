import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "../../Utilities/sessionManger";

export const PublicRoute = ({ component: Component, ...rest }) => (
  // This function only renders the component if the user is not authentificated else it redirects to Home view
  <Route
    {...rest}
    render={props =>
      !getSession() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/Home", state: { from: props.location } }}
        />
      )
    }
  />
);