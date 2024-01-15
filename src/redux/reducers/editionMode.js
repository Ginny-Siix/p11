import { createSlice } from "@reduxjs/toolkit";

const editionModeSlice = createSlice({
  name: "edition",
  initialState: {
    isOnEdition: false,
  },
  reducers: {
    setOnEdition: (state, action) => {
      state.isOnEdition = action.payload;
    },
  },
});

export const { setOnEdition } = editionModeSlice.actions;
export default editionModeSlice.reducer;
