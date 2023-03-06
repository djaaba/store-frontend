import { IDevice, typesCartAction as type } from "../../shared";

export const addToCart = (body: IDevice) => ({
    type: type.ADD_TO_CART,
    body,
});

export const toggleProduct = (body: IDevice) => ({
    type: "TOGGLE_PRODUCT",
    body,
});

export const incrementCount = (body: IDevice) => ({
    type: type.INCREMENT_COUNT,
    body,
});

export const decrementCount = (body: IDevice) => ({
    type: type.DECREMENT_COUNT,
    body,
});

export const removeFromCart = (body: IDevice) => ({
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
