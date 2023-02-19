import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ArrowProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}
