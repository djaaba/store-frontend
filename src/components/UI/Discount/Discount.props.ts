import { HTMLProps, ReactNode } from "react";

import { IDevice } from "@/shared";

export interface DiscountProps extends HTMLProps<HTMLDivElement> {
    item: IDevice;
}