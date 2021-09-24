import { combineReducers } from "redux";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
// import productReducer from "./productReducer";

const rootReducer = {
  user: userReducer,
  // product: productReducer,
  order: orderReducer,
};

export default combineReducers(rootReducer);
