import {combineReducers, createStore} from "redux";

import userReducer from "../reducers/user.reducer.js";
import productsReducer from "../reducers/products.reducer.js";
import platformReducer from "../reducers/platform.reducer.js";
import isLog from "../reducers/isLog.reducer.js";

export const rootReducer = combineReducers({
  users: userReducer,
  platform: platformReducer,
  products: productsReducer,
  isLog: isLog
})

export const store = createStore(rootReducer);