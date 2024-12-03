import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Export actions
export const { increment } = counterSlice.actions;

// Export selector
export const selectCount = (state) => state.counter.value;

// Export reducer
export default counterSlice.reducer;
