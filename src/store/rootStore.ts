import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { cart } from "./cart/reducer";
import { favorite } from "./favorite/reducer";

const rootReducer = combineReducers({
    cart,
    favorite,
});

export const rootStore = createStore(rootReducer, devToolsEnhancer());
