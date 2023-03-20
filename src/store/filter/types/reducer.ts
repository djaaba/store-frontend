import {
    FilterAction,
    IType,
    typesFilterAction as types,
} from "@/shared";

export const typesFilter = (state: IType[] = [], action: FilterAction) => {
    switch (action.type) {
        case types.TOGGLE_TYPE: {
            return state.filter((type) => type.id === action.body.id)
                .length
                ? state.filter((type) => type.id !== action.body.id)
                : [...state, action.body];
        }

        default:
            return state;
    }
};
