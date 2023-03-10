import cartReducer from "./index";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { addItem, removeItem } from "../actions";

describe("Cart reducer", () => {
  const reducers = combineReducers({
    cart: cartReducer,
  });
  const store = createStore(reducers);

  it("provides initial state", () => {
    let state = store.getState();

    expect(state.cart.length).toEqual(0);
    expect(state).toBeTruthy();
  });
  it("can add and remove products", () => {
    let state = store.getState();
    let productOne = { name: "product one", price: 5 };
    let productTwo = { name: "product two", price: 15 };
    expect(state.cart.length).toEqual(0);
    expect(state).toBeTruthy();

    store.dispatch(addItem(productOne));
    store.dispatch(addItem(productTwo));
    
    let newState = store.getState();
    expect(newState.cart.length).toEqual(2);
    expect(newState.cart[0].name).toEqual("product one");
    expect(newState.cart[1].name).toEqual("product two");

    store.dispatch(removeItem(productOne));
    let newestState = store.getState();
    expect(newestState.cart.length).toEqual(1);
    expect(newestState.cart[0].name).toEqual("product two");
  });
});
