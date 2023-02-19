import { HTMLProps, ReactNode } from "react";
import { IProduct } from "../../../shared/IProduct";

export interface CartProductProps extends HTMLProps<HTMLDivElement> {
    product: IProduct;
}
