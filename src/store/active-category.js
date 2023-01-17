const initialState = {
  categories: [
    {name: 'Food', description: {} },
    {name: 'Electronics', description: {} },
    {name: 'Games', description: {} },
    {name: 'Weapons', description: {} },
  ]
}

function activeCategoryReducer(state = initialState, action){
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

export default activeCategoryReducer;
