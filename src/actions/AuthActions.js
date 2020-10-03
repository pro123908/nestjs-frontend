import axios from "axios";
import { handleAccessTokenInLocalStorage } from "../utils/LocalStorage";
import { LOGIN_USER, REQUEST_ERROR } from "./actionType";

export const loginUser = (email, password, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      console.log(response.data);
      handleAccessTokenInLocalStorage(
        "ACCESS_TOKEN",
        response.data.accessToken
      );
      dispatch({ type: LOGIN_USER, payload: response.data.accessToken });
      history.push("/home");
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const registerUser = (name, email, password, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });

      console.log(response.data);
      // handleAccessTokenInLocalStorage(
      //   "ACCESS_TOKEN",
      //   response.data.accessToken
      // );
      // dispatch({ type: SIGN_UP_USER
      //   , payload: response.data.accessToken });
      // history.push("/home");
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const CheckProtected = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/protected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};
