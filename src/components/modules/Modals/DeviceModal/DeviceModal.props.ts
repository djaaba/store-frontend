import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBrand, IType } from "@/shared";

export interface DeviceModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: IType[];
    brands: IBrand[];
}
