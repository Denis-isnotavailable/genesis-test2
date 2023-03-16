import { configureStore } from "@reduxjs/toolkit";

import { coursesReducer } from "./slice";


export const store = configureStore({
    reducer: coursesReducer,
});