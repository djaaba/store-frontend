import { IProduct, typesCartAction as type } from "../../shared";

export const addToCart = (body: IProduct) => ({
    type: type.ADD_TO_CART,
    body,
});

export const toggleProduct = (body: IProduct) => ({
    type: "TOGGLE_PRODUCT",
    body,
});

export const incrementCount = (body: IProduct) => ({
    type: type.INCREMENT_COUNT,
    body,
});

export const decrementCount = (body: IProduct) => ({
    type: type.DECREMENT_COUNT,
    body,
});

export const removeFromCart = (body: IProduct) => ({
    type: type.REMOVE_FROM_CART,
    body,
});

export const selectAll = (flag: boolean) => ({
    type: type.SELECT_ALL,
    flag,
});

export const removeSelected = () => ({
    type: type.REMOVE_SELECTED,
});
