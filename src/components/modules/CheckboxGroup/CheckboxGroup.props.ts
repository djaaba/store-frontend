import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBrand, IType } from "@/shared";

export interface CheckboxGroupProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: any;
    filterByFunc: any;
    filterByArr: any;
}
