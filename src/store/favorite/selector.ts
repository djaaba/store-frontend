import { IProduct } from "../../interfaces";
// import { getPrice } from "../../utils";

export const selectFavorite = (state: any) => state.favorite;

// export const checkFavorite = (state: any, item: IProduct) => {

// }

// export const checkFavorite = (state: any, item: IProduct) =>
//     state.favorite.findIndex((product: IProduct) => product.id === item.id);

// export const countCart = (state: any) => state.cart.length;

// export const discountCart = (state: any) =>
//     state.cart.reduce(
//         (acc: number, cur: IProduct) =>
//             acc + (cur.price - getPrice(cur.price, cur.discount)) * cur.count,
//         0
//     );

// export const sumPriceCart = (state: any) =>
//     state.cart.reduce(
//         (acc: number, cur: IProduct) => acc + cur.price * cur.count,
//         0
//     );

// export const sumCountCart = (state: any) =>
//     state.cart.reduce((acc: number, cur: IProduct) => acc + cur.count, 0);

// export const hasSelected = (state: any) =>
//     state.cart.findIndex((product: IProduct) => product.isSelected === true);

// export const hasFavorited = (state: any) =>
//     state.cart.filter((product: IProduct) => product.isFavorite === true);
