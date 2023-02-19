import { IProduct } from "../../../../shared";

export const check = (item: IProduct, favorites: IProduct[]) => {
    const index = favorites.findIndex((elem: IProduct) => elem.id === item.id);
    if (index < 0) {
        return false;
    }
    return true;
};
