import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchAllSellerProducts = createAsyncThunk(
  "sellerProducts/get",
  async (sellerEmail) => {
    try {
      // first fetch seller
      const res1 = await fetch(`/api/users/${sellerEmail}`);
      const data1 = await res1.json();
      console.log(data1)
      const sellerId = data1[0]._id;
      console.log(sellerId);
      const res = await fetch(`/api/seller/products/${sellerId}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const sellerProductSlice = createSlice({
  name: "products",
  initialState: {
    data: null, // or [] depending on your shape
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllSellerProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(FetchAllSellerProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(FetchAllSellerProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default sellerProductSlice.reducer;
