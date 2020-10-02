import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { SET_AUTH_TOKEN } from "../actions/actionType";
import { handleAccessTokenInLocalStorage } from "../utils/LocalStorage";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch({
  type: SET_AUTH_TOKEN,
  payload: handleAccessTokenInLocalStorage("ACCESS_TOKEN"),
});

export default store;
