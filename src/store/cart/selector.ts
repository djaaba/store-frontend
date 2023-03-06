import { IDevice } from "../../shared";
import { getPrice } from "../../utils";

export const selectCart = (state: any) => state.cart;

export const countCart = (state: any) => state.cart.length;

export const discountCart = (state: any) =>
    state.cart.reduce(
        (acc: number, cur: IDevice) =>
            acc + (cur.price - getPrice(cur.price, cur.discount)) * cur.count,
        0
    );

export const sumPriceCart = (state: any) =>
    state.cart.reduce(
        (acc: number, cur: IDevice) => acc + cur.price * cur.count,
        0
    );

export const sumCountCart = (state: any) =>
    state.cart.reduce((acc: number, cur: IDevice) => acc + cur.count, 0);

export const hasSelected = (state: any) =>
    state.cart.findIndex((product: IDevice) => product.isSelected === true);

export const hasFavorited = (state: any) =>
    state.cart.filter((product: IDevice) => product.isFavorite === true);
