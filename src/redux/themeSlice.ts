import { createSlice } from "@reduxjs/toolkit";

export type darkTheme = {
    value: boolean;
}

const initialState: darkTheme = {
    value: false,
};

const themeSlice = createSlice({name: "darkTheme", initialState: initialState, reducers: {
    setDarkThemeValue: (state, action) => {
        state.value = action.payload;
    }
}});

export const {setDarkThemeValue} = themeSlice.actions;

export default themeSlice.reducer;