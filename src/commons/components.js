import { Redirect, Route } from "react-router-dom";
import React from 'react';
import { checkAuth } from "../helpers/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (checkAuth() // check Auth data ?
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
)
