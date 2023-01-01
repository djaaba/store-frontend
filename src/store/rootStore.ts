import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { counter } from "./counter/counter-reducer"; 

const rootReducer = combineReducers({
    counter
})

export const rootStore = createStore(rootReducer, devToolsEnhancer());