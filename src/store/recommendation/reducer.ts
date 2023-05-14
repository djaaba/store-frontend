import { IDevice, recommendationAction, typesRecommendationAction as types } from "../../shared";

export const recommendation = (state: IDevice[] = [], action: recommendationAction) => {
    switch (action.type) {
        case types.TOGGLE_RECOMMENDATION: {
            return state.filter((product) => product.typeId === action.body.typeId)
                .length
                ? [action.body, ...state.filter((product) => product.typeId !== action.body.typeId)]
                : [action.body, ...state];
            }
        default:
return state;
    }
};
