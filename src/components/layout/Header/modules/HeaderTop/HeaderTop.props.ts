import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IStoreInfo } from "@/shared";

export interface HeaderTopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IStoreInfo;
}