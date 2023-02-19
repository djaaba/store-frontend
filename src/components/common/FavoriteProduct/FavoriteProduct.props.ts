import { HTMLProps, ReactNode } from "react";
import { IProduct } from "../../../shared/IProduct";

export interface FavoriteProductProps extends HTMLProps<HTMLDivElement> {
    product: IProduct;
}
