import { combineReducers, configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";
import startTimerSlice from "./startTimerSlice";

const rootReducer = combineReducers({
    income: incomeSlice,
    startTimer: startTimerSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;