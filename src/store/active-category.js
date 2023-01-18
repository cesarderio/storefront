const initialState = {
  categories: [
    { name: "Food", description: {} },
    { name: "Electronics", description: {} },
    { name: "Games", description: {} },
    { name: "Weapons", description: {} },
  ],
};

function activeCategoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        activeCategory: payload,
        products: state.products.filter((product) => product.category === payload),
      };
    case "RESET":
      return initialState;
    case "Food":
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === payload.name) {
            return {
              name: category.name,
              products: category.products,
            };
          }
          return category;
        }),
      };
    case "Electronics":
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === payload.name) {
            return {
              name: category.name,
              products: category.products,
            };
          }
          return category;
        }),
      };
    case "Games":
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === payload.name) {
            return {
              name: category.name,
              products: category.products,
            };
          }
          return category;
        }),
      };
    case "Weapons":
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === payload.name) {
            return {
              name: category.name,
              products: category.products,
            };
          }
          return category;
        }),
      };
    default:
      return state;
  }
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
}

export default activeCategoryReducer;
