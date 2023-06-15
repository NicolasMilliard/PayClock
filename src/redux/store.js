import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice with the initial state and reducers
const inputSlice = createSlice({
  name: "input",
  initialState: { value: "" },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Extract the action creators from the slice
export const { setInputValue } = inputSlice.actions;

// Create the Redux store
const store = configureStore({ reducer: inputSlice.reducer });

export default store;
