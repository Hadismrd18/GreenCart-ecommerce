import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      const newUser = action.payload;
      console.log(newUser);
    },
  },
});


export const {getUser} = userSlice.actions
export default userSlice.reducer