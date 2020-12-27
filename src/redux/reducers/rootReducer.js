import allItemsReducer from "./allItems";
import itemsInCartReducer from "./cart";
import customiseItemReducer from "./selectedItem";
import { combineReducers } from "redux";

export default combineReducers({
  allItems: allItemsReducer,
  itemsInCart: itemsInCartReducer,
  customiseItem: customiseItemReducer
});
