import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IBrand } from "../../../shared";

export interface BrandsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    brands: IBrand[];
}
