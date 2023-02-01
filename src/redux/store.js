import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from './reducers/userReducer.js';

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  userReducer: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false
    }),
})

export let persistor = persistStore(store);