import { IDevice } from "../IDevice";

export type recommendationAction = {
    type: typesRecommendationAction;
    body: IDevice;
};

export enum typesRecommendationAction {
    CHECK_RECOMMENDATION = "CHECK_RECOMMENDATION",
    TOGGLE_RECOMMENDATION = "TOGGLE_RECOMMENDATION",
}