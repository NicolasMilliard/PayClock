import { combineReducers, configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";

const rootReducer = combineReducers({
    income: incomeSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;