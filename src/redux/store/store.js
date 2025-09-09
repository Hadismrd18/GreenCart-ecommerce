import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user.slice";
import orderReducer from "../slices/order.slice";
import cartReducer from "../slices/cart.slice";
import productSlice from "../slices/product.slice";
import sellerProductsSlice from "../slices/sellerProducts.slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      order: orderReducer,
      cart: cartReducer,
      product: productSlice,
      sellerProducts: sellerProductsSlice,
    },
  });
};
