import { createStore, combineReducers, compose } from "redux";
import reducers from "../reducers";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

export const store = createStore(
  compose(
    combineReducers({
      user: userReducer,
      auth: authReducer
    })
  )
);
