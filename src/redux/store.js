import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice/CategorySlice"
import cartReducer from "./slice/cartSlice/CartSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

//Making it persistent to avoid loss of data on refresh... 
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
    categoryReducer,
    cartReducer,
  })

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store);