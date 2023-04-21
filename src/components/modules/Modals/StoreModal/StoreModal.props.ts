import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IStoreInfo } from "@/shared";

export interface StoreModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    storeInfo: IStoreInfo;
}
