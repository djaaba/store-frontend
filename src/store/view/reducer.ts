import { IDevice, viewAction, typesViewAction as types } from "../../shared";

const limit: number = 10;

export const view = (state: IDevice[] = [], action: viewAction) => {
    switch (action.type) {
        case types.ADD_VIEW: {
            return state.length >= limit
                ? [action.body, ...state.filter((product, i) => i < limit - 1)]
                : [action.body, ...state];
        }
        default:
            return state;
    }
};
