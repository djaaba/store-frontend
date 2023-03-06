import { IDevice, typesFavoriteAction as types } from "../../shared";

export const toggleFavorite = (body: IDevice) => ({
    type: types.TOGGLE_FAVORITE,
    body,
});

export const checkFavorite = (body: IDevice) => ({
    type: types.CHECK_FAVORITE,
    body,
});
