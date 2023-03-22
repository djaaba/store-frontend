import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactFragment, ReactNode } from "react";

export interface ScrollProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactElement | ReactElement[];
}
