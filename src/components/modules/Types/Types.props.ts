import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IType } from "@/shared";

export interface TypesProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLDivElement> {
    types: IType[];
}
