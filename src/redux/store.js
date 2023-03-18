import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

import { coursesReducer } from "./slice";
import { currentLessonsReducer } from "./currentLessonsSlice";

const persistConfig = {
    key: 'rootss',
    storage,
};

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        currentLessons: persistReducer(persistConfig, currentLessonsReducer)      
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),   
});

export const persistor = persistStore(store);
