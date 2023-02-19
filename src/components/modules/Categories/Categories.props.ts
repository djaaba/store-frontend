import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { ICategory } from "../../../shared";

export interface CategoriesProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    categories: ICategory[];
}
