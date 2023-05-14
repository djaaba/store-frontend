import { IDevice, typesRecommendationAction as types } from "../../shared";

export const toggleRecommendation = (body: IDevice) => ({
    type: types.TOGGLE_RECOMMENDATION,
    body,
});

export const checkRecommendation = (body: IDevice) => ({
    type: types.CHECK_RECOMMENDATION,
    body,
});
