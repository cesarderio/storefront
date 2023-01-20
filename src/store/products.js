import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];

// const SET_ITEMS = "SET_ITEMS";
// const SELECT_CATEGORY = "SELECT_CATEGORY";
// const RESET = "RESET";

// export const setItems = createAction(SET_ITEMS);
// export const selectCat = createAction(SELECT_CATEGORY);
// export const setReset = createAction(RESET);

// export const getProducts = () => async (dispatch, getState) => {
//   let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
//   dispatch(setItems(response.data.results));
// };

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET-PRODUCTS":
      return payload;
    case "UPDATE-PRODUCT":
      return state.map(product => product.name !== payload.name ? product : payload);
    default:
      return state;
  }
};

export default productsReducer;

// case "SELECT_CATEGORY":
//   return initialState.filter((product) => product.category === payload);
// case "RESET":
//   return initialState;
