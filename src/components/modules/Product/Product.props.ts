import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "@/shared";

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IDevice;
}
