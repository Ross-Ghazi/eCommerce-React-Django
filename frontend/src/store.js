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

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initalState = {
  cart: { cartItems: cartItemFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
