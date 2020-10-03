import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";

import { Provider } from "react-redux";

import store from "./store";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import SignUp from "./containers/SignUp/SignUp";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <PublicRoute component={Login} path="/" restricted={true} /> */}
          <PublicRoute component={Login} path="/login" restricted={true} />
          <PublicRoute component={SignUp} path="/sign-up" restricted={true} />
          <PublicRoute component={Home} path="/home" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
