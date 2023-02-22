import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IProductCategory } from "../../../shared";

export interface CategoriesProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLDivElement> {
    categories: IProductCategory[];
}
