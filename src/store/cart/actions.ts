import { IDevice, typesCartAction as type } from "../../shared";

export const toggleCart = (body: IDevice) => ({
    type: type.TOGGLE_CART,
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