import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../reducers/userAuthSlice";
import profileSlice from "../reducers/profileSlice";
import editionMode from "../reducers/editionMode.js";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    profile: profileSlice,
    editionMode: editionMode,
  },
});

export default store;
