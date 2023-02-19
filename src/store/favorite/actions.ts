import { IProduct, typesFavoriteAction as types } from "../../shared";

export const toggleFavorite = (body: IProduct) => ({
    type: types.TOGGLE_FAVORITE,
    body,
});

export const checkFavorite = (body: IProduct) => ({
    type: types.CHECK_FAVORITE,
    body,
});
