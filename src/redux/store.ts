import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import incomeSlice from "./incomeSlice";
import startTimerSlice from "./startTimerSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    income: incomeSlice,
    startTimer: startTimerSlice
});

// Income reducer is persisted
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["income"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

const persistor = persistStore(store);

export { store, persistor };