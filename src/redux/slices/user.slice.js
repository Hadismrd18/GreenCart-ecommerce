import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: {},
};
// based on the user email in session storage make an api call to backend to get userId
export const findCurrentUser = createAsyncThunk(
  "userById/get",
  async (sellerEmail) => {
    try {
      const res = await fetch(`/api/users/${sellerEmail}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      const newUser = action.payload;
      state.userData = newUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findCurrentUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
