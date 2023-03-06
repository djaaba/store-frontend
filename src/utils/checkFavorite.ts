import { IDevice } from "../shared";

export const checkFavorite = (item: IDevice, favorites: IDevice[]) => {
    const index = favorites.findIndex((elem: IDevice) => elem.id === item.id);
    if (index < 0) {
        return false;
    }
    return true;
};
