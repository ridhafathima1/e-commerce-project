import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
export const {
  loginUser,
  logoutUser,
} = userSlice.actions;
export default userSlice.reducer;