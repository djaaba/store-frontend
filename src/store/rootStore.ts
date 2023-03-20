import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { cart } from "./cart/reducer";
import { favorite } from "./favorite/reducer";
import { user } from "./user/reducer";
import { typesFilter } from "./filter/types/reducer";
import { brandsFilter } from "./filter/brands/reducer";

const rootReducer = combineReducers({
    cart,
    favorite,
    user,
    typesFilter,
    brandsFilter
});

export const rootStore = createStore(rootReducer, devToolsEnhancer());
