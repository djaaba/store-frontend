import { IBrand } from "../shared";

export const cutArray = (brands: IBrand[]) => {
    let i: number = 0;
    const newArr = [];

    do {
        newArr.push(brands.slice(i, i + 2))
        i += 2;
    } while (i < brands.length)
    return newArr;
}