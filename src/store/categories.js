// import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categories: [],
  activeCategory: "",
};

// const categorySlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {
//     SELECT_CATEGORY: (state, action) => {
//       return {
//         ...state,
//         activeCategory: action.payload,
//       };
//     },
//     SET_CATEGORIES: (state, action) => {
//       return {
//         ...state,
//         categories: action.payload,
//       };
//     },
//     RESET: () => initialState,
//   },
// });

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        activeCategory: payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// export const {SELECT_CATEGORY, SET_CATEGORIES, RESET} = categorySlice.actions;
// export default categorySlice.reducer;
export default categoriesReducer;
