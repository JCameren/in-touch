import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../utils/services/userService";

const initialState = {
  user: getUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp(state, action) {
      localStorage.setItem("activeNav", JSON.stringify("HOME"));
      state.user = action.payload;
    },
    logIn(state, action) {
      localStorage.setItem("activeNav", JSON.stringify("HOME"));
      state.user = action.payload;
    },
    logOut(state) {
      state.user = null;
      localStorage.setItem("activeNav", JSON.stringify("HOME"));
      localStorage.removeItem("token");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
