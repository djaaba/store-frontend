import { HTMLProps, ReactNode } from "react";

export interface WhiteWrapperProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}