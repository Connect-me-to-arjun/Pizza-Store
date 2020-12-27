import { SET_SELECTED_ITEM, CLOSE_CUSTOMISE_MODAL } from "../stringConstants";

const initialState = {
  selected: null,
  showModal: false
};

const customiseItem = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selected: action.payload,
        showModal: Object.keys(action.payload) ? true : false
      };
    case CLOSE_CUSTOMISE_MODAL:
      return { ...state, selected: null, showModal: false };
    default:
      return { ...state };
  }
};

export default customiseItem;
