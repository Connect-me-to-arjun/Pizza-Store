import {
  ADD_CART_ITEM,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM
} from "../stringConstants";

//action creators
const addItemToCart = item => {
  return {
    type: ADD_CART_ITEM,
    payload: item
  };
};

const incrementCartItem = id => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: id
  };
};

const decrementCartItem = id => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: id
  };
};

//actions
export const addCartItem = cartItem => {
  return dispatch => {
    dispatch(addItemToCart(cartItem));
  };
};

export const incrementCart = id => {
  return dispatch => {
    dispatch(incrementCartItem(id));
  };
};

export const decrementCart = id => {
  return dispatch => {
    dispatch(decrementCartItem(id));
  };
};
