import { HTMLProps, ReactNode } from "react";
import { IProduct } from "../../../interfaces/IProduct";

export interface FavoriteProductProps extends HTMLProps<HTMLDivElement> {
    product: IProduct;
}
