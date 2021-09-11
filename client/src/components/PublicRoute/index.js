import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "../../Utilities/sessionManger";

export const PublicRoute = ({ component: Component, ...rest }) => (
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