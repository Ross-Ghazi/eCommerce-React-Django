import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListRedcuer,
  ProductDetailRedcuer,
} from "./reducers/ProductRedcuers";

import { UserLoginRedcuer } from "./reducers/UserRedcuers";
import { CartReducer } from "./reducers/CartRedcuers";

const reducer = combineReducers({
  ProductList: ProductListRedcuer,
  ProductDetails: ProductDetailRedcuer,
  cart: CartReducer,
  userLogin: UserLoginRedcuer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initalState = {
  cart: { cartItems: cartItemFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
