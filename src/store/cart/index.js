const initialState = [];


const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Add":
      return [...state, payload];
    case 'REMOVE':
      return state.filter(product => product.name !== payload.name)
    default:
      return state;
  }
}

export default cartReducer;



// const updateCounter = () => {

// }
// export const incrementCount = (product) => {
//   return {
//     type: 'INCREMENT',
//     payload: product,
//   }
// }
// export const decrementCount = (product) => {
//   return {
//     type: 'DECREMENT',
//     payload: product,
//   }
// }


