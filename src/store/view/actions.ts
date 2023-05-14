import { IDevice, typesViewAction as types } from "../../shared";

export const addView = (body: IDevice) => ({
    type: types.ADD_VIEW,
    body,
});