import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchAllProducts = createAsyncThunk(
  "products/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        const text = await res.text();
        return rejectWithValue(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message ?? "Network error");
    }
  }
);

const initialState = {
  data: [], // array of products
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(FetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(FetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
