import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { cart } from "./cart/reducer";
import { favorite } from "./favorite/reducer";
import { user } from "./user/reducer";
import { view } from "./view/reducer";
import { recommendation } from "./recommendation/reducer";
import { typesFilter } from "./filter/types/reducer";
import { brandsFilter } from "./filter/brands/reducer";

const rootReducer = combineReducers({
    cart,
    favorite,
    user,
    view,
    recommendation,
    typesFilter,
    brandsFilter
});

export const rootStore = createStore(rootReducer, devToolsEnhancer());
