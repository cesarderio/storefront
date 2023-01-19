import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

// create constants used for TWO things
// 1. translate to our actual actions
// 2. use them as keys for my reducer
// 3.

const ADD_ITEMS = "ADD_ITEMS";
const SET_ITEMS = "SET_ITEMS";

// create actions
export const addItems = createAction(ADD_ITEMS);
export const setItems = createAction(SET_ITEMS);

// `https://api-js401.herokuapp.com/api/v1/categories`
// `https://api-js401.herokuapp.com/api/v1/products`
// function to be used by THUNK
export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
  dispatch(setItems(response.data.results));
};

export const getCats = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/categories");
  dispatch(setItems(response.data.results));
}

const todoReducer = createReducer(
  {
    list: [],
  },
  {
    [ADD_ITEMS]: (state, action) => {
      return {
        list: [...state.list, action.payload],
      };
    },
    [SET_ITEMS]: (state, action) => {
      return {
        list: action.payload,
      };
    },
  }
);

export default todoReducer;
