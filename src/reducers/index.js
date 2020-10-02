import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import Reducer2 from "./Reducer2";

const rootReducer = combineReducers({
  auth: AuthReducer,
  Reducer2,
});

export default rootReducer;
