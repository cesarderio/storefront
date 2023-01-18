export const selectCategory = (category) => {
  return{
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
