import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PrivateRoute = ({ component: OriginalComponent, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     // Object.keys(store.getState().auth.user).length > 0 ? (
    //     store.getState().auth.accessToken ? (
    //       <OriginalComponent {...props} />
    //     ) : (
    //       <Redirect to="login" />
    //     )
    //   }
    // />
    <Route {...rest} render={(props) => <OriginalComponent {...props} />} />
  );
};

export default PrivateRoute;
