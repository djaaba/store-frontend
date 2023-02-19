import { DetailedHTMLProps, HTMLAttributes, HTMLProps, ReactNode } from "react";
import { IProduct } from "../../../interfaces";

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IProduct;
}
