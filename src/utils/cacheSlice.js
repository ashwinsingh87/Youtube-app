import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "Cache",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export default cacheSlice.reducer;
export const {cacheResults} = cacheSlice.actions;
