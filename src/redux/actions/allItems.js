import axios from "axios";
import { allItemsUrl } from "../../UrlConstants";
import {
  GET_ALL_ITEMS,
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_FAILURE,
  SET_FILTERED_DATA,
  SET_SEARCH_FILTERED
} from "../stringConstants";

const getAllItems = () => {
  return {
    type: GET_ALL_ITEMS
  };
};

const getAllItemsSuccess = data => {
  return {
    type: GET_ALL_ITEMS_SUCCESS,
    payload: data
  };
};

const getAllItemsFailure = () => {
  return {
    type: GET_ALL_ITEMS_FAILURE
  };
};

const filteredData = data => {
  return {
    type: SET_FILTERED_DATA,
    payload: data
  };
};

const setSearchFiltered = data => {
  return {
    type: SET_SEARCH_FILTERED,
    payload: data
  };
};

export const setSearchedData = data => {
  return dispatch => {
    dispatch(setSearchFiltered(data));
  };
};

export const gettAllMenuItems = () => {
  return dispatch => {
    dispatch(getAllItems());
    axios
      .get(allItemsUrl)
      .then(res => {
        dispatch(getAllItemsSuccess(res.data));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(getAllItemsFailure());
      });
  };
};

export const setFilteredData = data => {
  return dispatch => {
    dispatch(filteredData(data));
  };
};
