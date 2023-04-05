import { IBrand } from "../shared";

export const cutArray = <Type>(items: Type[]) => {
    let i: number = 0;
    const newArr = [];

    do {
        newArr.push(items?.slice(i, i + 2))
        i += 2;
    } while (i < items?.length)
    return newArr;
}