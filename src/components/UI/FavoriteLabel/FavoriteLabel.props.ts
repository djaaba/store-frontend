import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "@/shared";

export interface FavoriteLabelProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IDevice;
    icon?: boolean;
}
