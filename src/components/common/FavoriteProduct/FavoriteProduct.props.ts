import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProduct } from "../../../shared";

export interface FavoriteProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct;
}
