const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
}

function categoriesReducer(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'Food':
      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.name === payload.name){
            return {
              name: category.name,
              products: category.products,
            }
          }
          return category;
        })
      }
    case 'Electronics':
      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.name === payload.name){
            return {
              name: category.name,
              products: category.products,
            }
          }
          return category;
        })
      }
      case 'Games':
        return {
          ...state,
          categories: state.categories.map(category => {
            if(category.name === payload.name){
              return {
                name: category.name,
                products: category.products,
              }
            }
            return category;
          })
        }
        case 'Weapons':
          return {
            ...state,
            categories: state.categories.map(category => {
              if(category.name === payload.name){
                return {
                  name: category.name,
                  products: category.products,
                }
              }
              return category;
            })
          }
    default:
      return state;
  }
}

export default categoriesReducer;
