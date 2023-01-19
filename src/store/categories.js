import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const SET_ITEMS = "SET_ITEMS";
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const RESET = 'RESET';

export const setItems = createAction(SET_ITEMS);
export const selectCat = createAction(SELECT_CATEGORY);
export const setReset = createAction(RESET);

export const getCats = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/categories");
  dispatch(setItems(response.data.results));
}

const categoriesReducer = createReducer(
  {
    list: [],
  },
  {
    [SELECT_CATEGORY]: (state, action) => {
      return {
        list: [...state.list, action.payload],
      };
    },
    [RESET]: (state, action) => {
      return {
        list: action.payload,
      };
    },
  }
);

// let initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//     { name: 'clothing', displayName: 'Clothing' },
//   ],
//   activeCategory: '',
// };

// const categoriesReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch(type){
//     case 'SELECT_CATEGORY':
//       return {
//         ...state,
//         activeCategory: payload,
//       }
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// };

export default categoriesReducer;
