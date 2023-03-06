import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDevice } from "../../../shared";

export interface BestsellersProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IDevice[];
}
