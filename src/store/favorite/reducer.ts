import { IProduct, FavoriteAction } from "../../interfaces";
import { data } from "./stub/dataStub";
import { typesFavoriteAction as types } from "../../interfaces";

export const initialsState = data;

export const favorite = (state: IProduct[] = [], action: FavoriteAction) => {
    switch (action.type) {
        case types.TOGGLE_FAVORITE: {
            return state.filter((product) => product.id === action.body.id)
                .length
                ? state.filter((product) => product.id !== action.body.id)
                : [...state, action.body];
        }
        default:
            return state;
    }
};
