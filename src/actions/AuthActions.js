import axios from "axios";
import { handleAccessTokenInLocalStorage } from "../utils/LocalStorage";
import { LOGIN_USER } from "./actionType";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: "pro123908@gmail.com",
        password: "home123",
      });

      console.log(response.data);
      handleAccessTokenInLocalStorage(
        "ACCESS_TOKEN",
        response.data.accessToken
      );
      dispatch({ type: LOGIN_USER, payload: response.data.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
};

export const RegisterUser = (name, email, password) => {
  return async (dispatch) => {};
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
