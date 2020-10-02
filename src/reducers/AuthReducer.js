import { CHECK_PROTECTED, LOGIN_USER } from "../actions/actionType";

const initialState = {
  accessToken: "",
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, accessToken: action.payload };

    case CHECK_PROTECTED:
      return { ...state };

    default:
      return state;
  }
};

export default Reducer1;
