import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IProduct } from "../../../shared";

export interface TopProductItemProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IProduct;
}
