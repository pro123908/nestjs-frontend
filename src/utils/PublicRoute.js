import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PublicRoute = ({ component: OriginalComponent, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        store.getState().auth.accessToken ? (
          <Redirect to="home" />
        ) : (
          <OriginalComponent {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
