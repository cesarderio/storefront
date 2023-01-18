import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import cartReducer from "./cart";
import categoriesReducer from "./categories";
// import activeCategoryReducer from "./active-category";
// import productsReducer from "./products";
// import { selectCategory, reset } from "./active-category";

let reducers = combineReducers({
  // activeCategory: activeCategoryReducer,
  // category: categoriesReducer,
  products: categoriesReducer,
  // products: productsReducer,
  // cart: cartReducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();
// export default function store() {
//   return createStore(reducers, composeWithDevTools());
// }
