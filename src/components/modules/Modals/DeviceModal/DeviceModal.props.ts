import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBrand } from "@/shared";

export interface DeviceModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: any;
    brands: IBrand[];
}
