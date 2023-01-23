import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import uiSlice from "./ui/uiSlice"

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ui: uiSlice.reducer
  },
});

export default store;
