import { ICharacteristic } from ".";

export enum typesFavoriteAction {
    CHECK_FAVORITE = "CHECK_FAVORITE",
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}

export enum typesCartAction {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    INCREMENT_COUNT = "INCREMENT_COUNT",
    DECREMENT_COUNT = "DECREMENT_COUNT",
    SELECT_ALL = "SELECT_ALL",
    REMOVE_SELECTED = "REMOVE_SELECTED",
    TOGGLE_PRODUCT = "TOGGLE_PRODUCT",
}

export type CartAction = {
    type: typesCartAction;
    body: IProduct;
    flag?: boolean;
};

export type FavoriteAction = {
    favorite: any;
    type: typesFavoriteAction;
    body: IProduct;
};

export interface IProduct {
    id: number;
    price: number;
    discount: number;
    name: string;
    description: string;
    imgUrl: string;
    isSelected: boolean;
    isFavorite: boolean;
    count: number;
    characteristics: ICharacteristic[];
}
