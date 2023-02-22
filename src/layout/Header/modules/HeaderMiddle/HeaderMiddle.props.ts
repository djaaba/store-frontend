import { DetailedHTMLProps, HTMLAttributes } from "react";
import { INav } from "../../../../shared";

export interface HeaderMiddleProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    navigation: INav[];
}
