const initialState = {
  cart: ''
};

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "Update":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === payload.name) {
            return {
              name: product.name,
              itemsCount: product.itemsCount + 1,
            };
          }
          return product;
        }),
        itemsInCart: state.itemsInCart + 1,
      };
    default:
      return state;
  }
}

// const updateCounter = () => {

// }
export const incrementCount = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  }
}
export const decrementCount = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  }
}


export default cartReducer;
