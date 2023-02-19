import { HTMLProps, ReactNode } from "react";

import { IProduct } from "../../../shared";

export interface TopProductItemProps extends HTMLProps<HTMLDivElement> {
    item: IProduct;
}
