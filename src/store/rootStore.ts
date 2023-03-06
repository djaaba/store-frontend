import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { cart } from "./cart/reducer";
import { favorite } from "./favorite/reducer";
import { user } from "./user/reducer";

const rootReducer = combineReducers({
    cart,
    favorite,
    user
});

export const rootStore = createStore(rootReducer, devToolsEnhancer());
