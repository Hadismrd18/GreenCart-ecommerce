import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      // check if there is an item in the state for this product
      const currentItem = state.find((item) => item._id === action.payload._id);
      if (currentItem) {
        console.log(action.payload);
        return [
          ...state,
          {
            ...action.payload,
            productDetails: {
              quantity: currentItem.productDetails.quantity + 1,
            },
          },
        ];
      }
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart } = cartSlice.actions;
