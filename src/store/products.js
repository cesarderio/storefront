import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
// const initialState = [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ];

const SET_ITEMS = "SET_ITEMS";
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const RESET = 'RESET';

export const setItems = createAction(SET_ITEMS);
export const selectCat = createAction(SELECT_CATEGORY);
export const setReset = createAction(RESET);

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
  dispatch(setItems(response.data.results));
};

// const productsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "SELECT_CATEGORY":
//       return initialState.filter(product => product.category === payload);
//     case 'RESET':
//           return initialState;
//     default:
//       return state;
//   }
// }
const productsReducer = createReducer(
  {
    productsList: [],
  },
  {
    [SELECT_CATEGORY]: (state, action) => {
      return {
        productsList: [...state.productsList, action.payload],
      };
    },
    [RESET]: (state, action) => {
      return {
        productsList: action.payload,
      };
    },
  }
);

export default productsReducer;
