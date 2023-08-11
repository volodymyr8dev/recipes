import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {recipeReducer} from "./slices/complexSearch.slice";
import {ingredientReducer} from "./slices/ingredientSearch.slice";


const rootReducer = combineReducers({
    recipeReducer,
    ingredientReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

const store = setUpStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}