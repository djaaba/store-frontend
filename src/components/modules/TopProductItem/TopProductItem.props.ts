import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "@/shared";

export interface TopProductItemProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IDevice;
}
