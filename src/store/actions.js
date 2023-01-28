// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const selectCategory = (category) => {
//   return {
//     type: "SELECT_CATEGORY",
//     payload: category,
//   };
// };

// export const reset = () => {
//   return {
//     type: "RESET",
//     payload: {},
//   };
// };

// export const addItem = (product) => {
//   return {
//     type: "ADD",
//     payload: product,
//   };
// };

// export const removeItem = (product) => {
//   return {
//     type: "REMOVE",
//     payload: product,
//   };
// };

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
  dispatch(setProducts(response.data.results));
};

export const setCategories = (products) => {
  return {
    type: "SET_CATEGORIES",
    payload: products,
  };
};

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/categories");
  dispatch(setCategories(response.data.results));
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export const adjustInventory = (product) => async (dispatch, getState) => {
  product.inStock--;
  let response = await axios.put(
    `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
    product
  );
  dispatch(updateProduct(response.data));
};

export const setDetails = (product) => {
  return {
    type: "SET_DETAILS",
    payload: product,
  };
};

export const getDetails = (product) => async (dispatch, getState) => {
  let response = await axios.get(
    `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
    product
  );
  dispatch(setDetails(response.data));
};

{
  /* <img alt={product.name} src={`https://source.unsplash.com/random?${product.name}`} /> */
}
// export const getProducts = createAsyncThunk(
//   'products/getProducts',
//   async() => {
//     const response = await axios.get('baseURL/products')
//     return response?.data
//   }
// )
