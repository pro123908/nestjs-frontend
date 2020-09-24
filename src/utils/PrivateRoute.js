import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PrivateRoute = ({ component: OriginalComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Object.keys(store.getState().Auth.googleUser).length > 0 ? (
          <OriginalComponent {...props} />
        ) : (
          <Redirect to="login" />
        )
      }
    />
  );
};

export default PrivateRoute;
