import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice"; // Import the reducer, not the slice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer here
  },
});

export default store;
