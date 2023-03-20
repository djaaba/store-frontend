import { IBrand, IType, typesFilterAction as type } from "@/shared";

export const toggleType = (body: IType) => ({
    type: type.TOGGLE_TYPE,
    body,
});