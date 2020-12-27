import {
  ADD_CART_ITEM,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM
} from "../stringConstants";

const initialState = {
  cart: {}
};
const ItemsInCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: action.payload }
      };
    case INCREMENT_CART_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: {
            ...state.cart[action.payload],
            quantity: state.cart[action.payload].quantity + 1
          }
        }
      };
    case DECREMENT_CART_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: {
            ...state.cart[action.payload],
            quantity: state.cart[action.payload].quantity - 1
          }
        }
      };
    default:
      return { ...state };
  }
};

export default ItemsInCartReducer;
