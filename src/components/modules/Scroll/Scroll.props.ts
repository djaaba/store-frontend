import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ScrollProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slides: string[];
}
