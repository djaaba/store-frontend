import { IBrand, typesFilterAction as type } from "@/shared";

export const toggleBrand = (body: IBrand) => ({
    type: type.TOGGLE_BRAND,
    body,
});