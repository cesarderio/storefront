let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: payload,
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default categoriesReducer;
