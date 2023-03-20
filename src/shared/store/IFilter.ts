import { IBrand, IType } from "@/shared";

export enum typesFilterAction {
    TOGGLE_BRAND = "TOGGLE_BRAND",
    TOGGLE_TYPE = "TOGGLE_TYPE"
}

export type FilterAction = {
    type: typesFilterAction;
    body: IType | IBrand;
}