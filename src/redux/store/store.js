import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user.slice";
import orderReducer from "../slices/order.slice";
export const makeStore = () => {
  return configureStore({
    reducer: { user: userReducer, order: orderReducer },
  });
};
