import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProduct } from "../../../shared/IProduct";
export interface CartProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct;
}
