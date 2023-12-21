// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../reducers/userReducers"; // Assurez-vous que vous avez un fichier reducers/index.js

const store = configureStore({
  reducer: {
    user: userReducers,
  },
});

export default store;
