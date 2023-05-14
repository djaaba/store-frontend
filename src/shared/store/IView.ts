import { IDevice } from "../IDevice";

export type viewAction = {
    type: typesViewAction;
    body: IDevice;
};

export enum typesViewAction {
    ADD_VIEW = "ADD_VIEW",
}