import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";

export const store = configureStore({
    reducer: {
        user: authReducer,


    },
});