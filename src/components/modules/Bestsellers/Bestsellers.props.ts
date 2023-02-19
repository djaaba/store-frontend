import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { IProduct } from "../../../shared";

export interface BestsellersProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IProduct[];
}
