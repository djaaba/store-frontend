import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "@/shared";

export interface FavoriteProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IDevice;
}
