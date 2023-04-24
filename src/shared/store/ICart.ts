import { IDevice } from "../IDevice";

export enum typesCartAction {
    INCREMENT_COUNT = "INCREMENT_COUNT",
    DECREMENT_COUNT = "DECREMENT_COUNT",
    TOGGLE_CART = "TOGGLE_CART",
}

export type CartAction = {
    type: typesCartAction;
    body: IDevice;
    flag?: boolean;
};