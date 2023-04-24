import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBreadcrumb } from "@/shared";
export interface BreadcrumbsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list: IBreadcrumb[];
}
