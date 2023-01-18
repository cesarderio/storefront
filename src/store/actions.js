import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: {},
  };
};

export const addItem = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

// export const getProducts = createAsyncThunk(
//   'products/getProducts',
//   async() => {
//     const response = await axios.get('baseURL/products')
//     return response?.data
//   }
// )
