let initialState = {
  productList: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCT_SUCCESS':
      console.log(payload.data);
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
}
export default productReducer;
