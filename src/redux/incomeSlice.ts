import { createSlice } from "@reduxjs/toolkit";

export type Income = {
    value: number;
}

const initialState: Income = {
    value: 0,
}

const incomeSlice = createSlice({name: "income", initialState: initialState, reducers: {
    setIncomeValue: (state, action) => {
        state.value = action.payload;
    }
}})

export const {setIncomeValue} = incomeSlice.actions;

export default incomeSlice.reducer;