import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IProduct } from "../../../shared";

export interface TopProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IProduct[];
}
