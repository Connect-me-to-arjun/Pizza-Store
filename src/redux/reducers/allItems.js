import {
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_FAILURE,
  SET_FILTERED_DATA,
  SET_SEARCH_FILTERED
} from "../stringConstants";

const initialState = {
  items: [],
  searchFiltered: []
};

const AllItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case GET_ALL_ITEMS_FAILURE:
      return { ...state };
    case SET_FILTERED_DATA:
      return { ...state, items: [...action.payload] };
    case SET_SEARCH_FILTERED:
      return { ...state, searchFiltered: [...action.payload] };
    default:
      return { ...state };
  }
};

export default AllItemsReducer;
