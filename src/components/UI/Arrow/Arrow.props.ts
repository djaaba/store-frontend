import { HTMLProps, ReactNode } from "react";

export interface ArrowProps extends HTMLProps<HTMLHeadingElement> {
    direction: "up" | "down" | "left" | "right";
}
