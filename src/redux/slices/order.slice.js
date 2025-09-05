import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchOrders = createAsyncThunk("orders/get", async (id) => {
  try {
    const res = await fetch(`/api/orders/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default orderSlice.reducer;
