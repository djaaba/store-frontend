import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProduct } from "../../../shared";

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IProduct;
}
