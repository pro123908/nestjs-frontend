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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Switch>
          {/* <PublicRoute component={Login} path="/" restricted={true} /> */}
          <PublicRoute component={Login} path="/login" restricted={true} />
          <PublicRoute component={SignUp} path="/sign-up" restricted={true} />
          <PrivateRoute component={Home} path="/home" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
