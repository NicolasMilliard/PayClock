import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import incomeSlice from "./incomeSlice";
import startTimerSlice from "./startTimerSlice";
import themeSlice from "./themeSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    income: incomeSlice,
    startTimer: startTimerSlice,
    darkTheme: themeSlice
});

// Income reducer is persisted
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ["startTimer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

const persistor = persistStore(store);

export { store, persistor };