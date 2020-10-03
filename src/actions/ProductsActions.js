import axios from "axios";
import { handleInAndOutFromLocalStorage } from "../utils/LocalStorage";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
} from "./actionType";

export const getProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/${productId}`
      );

      console.log(response.data);

      dispatch({ type: GET_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/products");

      console.log(response.data);

      dispatch({ type: GET_PRODUCTS, payload: response.data });
      handleInAndOutFromLocalStorage("products", response.data);
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const addProduct = (title, description, price) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/products", {
        title,
        description,
        price,
      });

      console.log(response.data);

      dispatch({ type: ADD_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/products/${productId}`
      );

      console.log(response.data);

      dispatch({ type: DELETE_PRODUCT, payload: response.data.productId });
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const updateProduct = (productId, fieldsToBeUpdated) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/products/${productId}`,
        fieldsToBeUpdated
      );

      console.log(response.data._id);

      dispatch({ type: UPDATE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};
