import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counter from "./slice/counterSlice"
import { createWrapper } from "next-redux-wrapper";

const mainReducer = combineReducers({
    counter
})

export const makeStore = () => 
    configureStore({
        reducer: mainReducer
    })

export const wrapper = createWrapper(makeStore) 