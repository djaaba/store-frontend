import { IProduct } from "../../interfaces";

export const toggleFavorite = (body: IProduct) => ({
    type: "TOGGLE_FAVORITE",
    body,
});

export const checkFavorite = (body: IProduct) => ({
    type: "CHECK_FAVORITE",
    body,
});
