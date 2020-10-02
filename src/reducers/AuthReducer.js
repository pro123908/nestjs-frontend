import {
  CHECK_PROTECTED,
  LOGIN_USER,
  SET_AUTH_TOKEN,
} from "../actions/actionType";

const initialState = {
  accessToken: "",
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, accessToken: action.payload };

    case CHECK_PROTECTED:
      return { ...state };

    case SET_AUTH_TOKEN:
      return { ...state, accessToken: action.payload };

    default:
      return state;
  }
};

export default Reducer1;
