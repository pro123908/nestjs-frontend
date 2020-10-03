import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { LOGIN_USER, SET_AUTH_TOKEN } from "../actions/actionType";
import {
  handleAccessTokenInLocalStorage,
  handleUserInLocalStorage,
} from "../utils/LocalStorage";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// store.dispatch({
//   type: SET_AUTH_TOKEN,
//   payload: handleAccessTokenInLocalStorage("ACCESS_TOKEN"),
// });

store.dispatch({
  type: LOGIN_USER,
  payload: handleUserInLocalStorage("xord-user"),
});

export default store;
