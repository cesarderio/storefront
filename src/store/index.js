import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import activeCategoryReducer from "./active-category";
import productsReducer from "./products";
import { selectCategory, reset } from "./active-category";

let reducers = combineReducers({
  activeCategory: activeCategoryReducer,
  category: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};


export default function store() {
  return createStore(reducers, composeWithDevTools());
}
