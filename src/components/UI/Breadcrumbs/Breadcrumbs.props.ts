import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBreadcrumb } from "../../../interfaces";
export interface BreadcrumbsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list: IBreadcrumb[];
}
