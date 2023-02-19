import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AtagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    arrow?: boolean;
    href?: string;
    name?: string;
    children: ReactNode;
}
