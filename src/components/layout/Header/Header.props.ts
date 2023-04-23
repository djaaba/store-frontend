import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IStoreInfo } from "@/shared";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IStoreInfo;
}