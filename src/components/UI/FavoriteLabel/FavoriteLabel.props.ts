import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
} from "react";

import { IProduct } from "../../../shared";
export interface FavoriteLabelProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct;
    icon?: boolean;
}
