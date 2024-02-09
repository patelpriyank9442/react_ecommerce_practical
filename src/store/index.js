import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import productSlice from "./ApiSlice/productSlice";
import storage from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    product: productSlice
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "product"
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;
