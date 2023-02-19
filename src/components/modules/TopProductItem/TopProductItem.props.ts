import { HTMLProps, ReactNode } from "react";

import { IProduct } from "../../../interfaces";

export interface TopProductItemProps extends HTMLProps<HTMLDivElement> {
    item: IProduct;
}
