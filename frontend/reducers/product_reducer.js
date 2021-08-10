import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const products = {};
      action.products.forEach(product => {
        products[product.id] = product;
      });
      return products;
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
}