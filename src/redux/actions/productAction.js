// 미들웨어는 함수를 리턴한다. dispatch와 state
function getProducts(searchQuerey) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/FdongFdong/website_practice_hnm/products?q=${searchQuerey}`;
    let response = await fetch(url);
    let data = await response.json();
    // setProductList(data);
    console.log('productAction.js');

    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
  };
}
// 함수로 수출한다.
export const productAction = { getProducts };
