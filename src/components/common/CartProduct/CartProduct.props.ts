import { HTMLProps, ReactNode } from "react";
import { IProduct } from "../../../interfaces/IProduct";

export interface CartProductProps extends HTMLProps<HTMLDivElement> {
    product: IProduct;
}
