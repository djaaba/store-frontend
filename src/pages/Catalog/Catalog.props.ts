import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICatalogCategory } from "../../shared";

export interface CatalogProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // categories: ICatalogCategory[];
}
