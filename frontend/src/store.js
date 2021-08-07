import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListRedcuer,
  ProductDetailRedcuer,
} from "./reducers/ProductRedcuers";

const reducer = combineReducers({
  ProductList: ProductListRedcuer,
  ProductDetails: ProductDetailRedcuer,
});
const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
