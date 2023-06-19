import { createSlice } from "@reduxjs/toolkit";

export type StartTimer = {
    value: number;
}

const initialState: StartTimer = {
    value: 0,
};

const startTimerSlice = createSlice({name: "startTimer", initialState: initialState, reducers: {
    setStartTimerValue: (state, action) => {
        state.value = action.payload;
    }
}});

export const {setStartTimerValue} = startTimerSlice.actions;

export default startTimerSlice.reducer;