import { IDevice } from "../IDevice";

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
    body: IDevice;
    flag?: boolean;
};