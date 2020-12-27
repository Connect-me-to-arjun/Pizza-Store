import { SET_SELECTED_ITEM, CLOSE_CUSTOMISE_MODAL } from "../stringConstants";

const setItem = data => {
  return { type: SET_SELECTED_ITEM, payload: data };
};

export const setSelectedItem = item => {
  return dispatch => {
    dispatch(setItem(item));
  };
};

const closeModal = () => {
  return { type: CLOSE_CUSTOMISE_MODAL };
};

export const closeItemModal = () => {
  return dispatch => {
    dispatch(closeModal());
  };
};
