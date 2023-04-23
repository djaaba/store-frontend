import { IStoreInfo, INav } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderMiddleProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    navigation: INav[];
    data: IStoreInfo;
}
