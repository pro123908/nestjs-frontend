import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PublicRoute = ({ component: OriginalComponent, restricted, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     Object.keys(store.getState().Auth.googleUser).length > 0 &&
    //     restricted ? (
    //       <Redirect to="home" />
    //     ) : (
    //       <OriginalComponent {...props} />
    //     )
    //   }
    // />
    <Route {...rest} render={(props) => <OriginalComponent {...props} />} />
  );
};

export default PublicRoute;
