import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
    extends Omit<
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        "onDragStart" | "onDragEnd" | "onDrag" | "ref"
    > {
    children: ReactNode;
    size: "big" | "medium" | "small";
    icon?: boolean;
    title?: string;
    color: "gray" | "red" | "dark";
}
