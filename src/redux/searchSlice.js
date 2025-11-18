import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "search",
  initialState: { query: "" },
  reducers: {
    setQuery: (state, action) => { state.query = action.payload; },
    clearQuery: (state) => { state.query = ""; },
  },
});

export const { setQuery, clearQuery } = slice.actions;
export default slice.reducer;