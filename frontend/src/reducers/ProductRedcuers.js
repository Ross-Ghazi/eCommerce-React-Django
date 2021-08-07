import {
  PRODCUT_LIST_REQUEST,
  PRODCUT_LIST_SUCCESS,
  PRODCUT_LIST_FAIL,
} from "../constants/productConstants";
export const ProductListRedcuer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODCUT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODCUT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODCUT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
