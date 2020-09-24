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

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute component={Home} path="/home" />
          <PublicRoute component={Login} path="/login" restricted={true} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
