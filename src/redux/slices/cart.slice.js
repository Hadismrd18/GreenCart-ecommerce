import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const placeOrder = createAsyncThunk("order/post", async (orderData) => {
  console.log(orderData);
  try {
    console.log("postinggg");
    const res = await fetch(`/api/orders`, {
      method: "POST",
      body: JSON.stringify(orderData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      console.log(JSON.parse(JSON.stringify(state)));
      const stateArr = JSON.parse(JSON.stringify(state));
      const currentItem = stateArr.find(
        (item) =>
          item.productDetails.data._id ===
          action.payload.productDetails.data._id
      );
      console.log(currentItem);
      if (currentItem) {
        // update quantity
        return state.map((item) =>
          item.productDetails.data._id ===
          action.payload.productDetails.data._id
            ? {
                ...item,
                productDetails: {
                  ...item.productDetails,
                  quantity: item.productDetails.quantity + 1,
                },
              }
            : item
        );
      }
      console.log("hi");
      // add new item with initial quantity 1
      return [
        ...state,
        {
          ...action.payload,
          productDetails: { ...action.payload.productDetails, quantity: 1 },
        },
      ];
    },
    removeItemFromCart(state, action) {
      console.log(action.payload);
      const itemId = action.payload;

      const newState = state.filter(
        (item) => item.productDetails.data._id !== itemId
      );
      console.log(newState);
      return newState;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
