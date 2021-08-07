import {
  PRODCUT_LIST_REQUEST,
  PRODCUT_LIST_SUCCESS,
  PRODCUT_LIST_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODCUT_LIST_REQUEST });
    const url = "/api/products";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: PRODCUT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("error:", error);
    console.log("error:", error.message);
    dispatch({
      type: PRODCUT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
