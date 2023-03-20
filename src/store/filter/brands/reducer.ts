import {
    FilterAction,
    IBrand,
    typesFilterAction as types,
} from "@/shared";

export const brandsFilter = (state: IBrand[] = [], action: FilterAction) => {
    switch (action.type) {
        case types.TOGGLE_BRAND: {
            return state.filter((brand) => brand.id === action.body.id)
                .length
                ? state.filter((brand) => brand.id !== action.body.id)
                : [...state, action.body];
        }

        default:
            return state;
    }
};
