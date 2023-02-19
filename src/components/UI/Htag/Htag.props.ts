import { HTMLProps, ReactNode } from "react";

export interface HtagProps extends HTMLProps<HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3" | "h4";
    children: ReactNode;
}
