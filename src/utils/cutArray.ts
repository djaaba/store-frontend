import { IBrand } from "../shared";

export const cutArray = <Type>(items: Type[], slice?: number) => {
    let i: number = 0;
    slice = slice? slice: 2; 
    const newArr = [];

    do {
        newArr.push(items?.slice(i, i + slice))
        i += slice;
    } while (i < items?.length)
    return newArr;
}