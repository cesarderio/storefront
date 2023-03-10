import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartReducer from "./cart";

const store = () =>
  configureStore({
    reducer: {
      category: categoriesReducer,
      products: productsReducer,
      cart: cartReducer,
    },
  });
export default store();
// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import categoriesReducer from "./categories";
// import productsReducer from "./products";
// import cartReducer from "./cart";
// // import logger from "./middleware/logger";
// import thunk from "./middleware/thunk";
// // import todoReducer from "./todo";

// let reducers = combineReducers({
//   category: categoriesReducer,
//   products: productsReducer,
//   cart: cartReducer,
// });

// const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// // const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

// export default store();
// // export default function store() {
// //   return createStore(reducers, composeWithDevTools());
// // }
