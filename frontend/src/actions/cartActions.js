import { CART_REMOVE_ITEM, CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const url = `/api/products/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.iamge,
      price: data.price,
      countInStock: data.CoucountInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
