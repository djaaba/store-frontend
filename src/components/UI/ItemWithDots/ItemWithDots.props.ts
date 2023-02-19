import { DetailedHTMLProps, HTMLAttributes, HTMLProps, ReactNode } from "react";

export interface ItemWithDotsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: "h1" | "h2" | "h3" | "h4" | "p";
    title: string;
    subtitle: string | number;
}
