import { IDevice } from "../IDevice";

export type favoriteAction = {
    type: typesFavoriteAction;
    body: IDevice;
};

export enum typesFavoriteAction {
    CHECK_FAVORITE = "CHECK_FAVORITE",
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}