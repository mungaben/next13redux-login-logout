



// create a store

import { configureStore } from "@reduxjs/toolkit";

// import deafult authreducer
import authReducer from "./authSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        authReducer
    }
})




// craete type for Rootstate

export type RootState = ReturnType<typeof store.getState>;

// create dispach typeof store action

export type AppDispatch = typeof store.dispatch;

// create a useselector type

export const AppUseSelector: TypedUseSelectorHook<RootState> = useSelector

