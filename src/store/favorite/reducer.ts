import { IDevice, FavoriteAction, typesFavoriteAction as types } from "../../shared";

export const favorite = (state: IDevice[] = [], action: FavoriteAction) => {
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
