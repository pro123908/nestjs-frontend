import { act } from "react-dom/test-utils";
import {
  CHECK_PROTECTED,
  CLEAR_REGISTRATION_ERROR,
  LOGIN_USER,
  REQUEST_ERROR,
  SET_AUTH_TOKEN,
  SIGN_UP_USER,
} from "../actions/actionType";

const initialState = {
  accessToken: "",
  error: {},
  user: {},
  email: "",
  name: "",
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        email: action.payload.email,
        name: action.payload.name,
      };

    case CHECK_PROTECTED:
      return { ...state };

    case SET_AUTH_TOKEN:
      return { ...state, accessToken: action.payload };

    case REQUEST_ERROR:
      return { ...state, error: action.payload };

    case SIGN_UP_USER:
      return { ...state, ...action.payload };

    case CLEAR_REGISTRATION_ERROR:
      return { ...state, error: {} };

    default:
      return state;
  }
};

export default Reducer1;
