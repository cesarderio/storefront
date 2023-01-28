// import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
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

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) =>
      state.map((product) =>
        product.name !== action.payload.name ? product : action.payload
      ),
  },
});
export const { setProducts, updateProduct } = productsSlice.actions;

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get("https://api-js401.herokuapp.com/api/v1/products");
  dispatch(setProducts(response.data.results));
};

export const adjustInventory = (product) => async (dispatch, getState) => {
  let updatedProduct = {...product, inStock: product.inStock - 1}
  // product.inStock = product.inStock - 1;
  let response = await axios.put(
    `https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  dispatch(updateProduct(response.data));
};

// const productsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "SET_PRODUCTS":
//       return payload;
//     case "UPDATE_PRODUCT":
//       return state.map((product) => (product.name !== payload.name ? product : payload));
//     default:
//       return state;
//   }
// };



export default productsSlice.reducer;

// case "SELECT_CATEGORY":
//   return initialState.filter((product) => product.category === payload);
// case "RESET":
//   return initialState;
