import { HTMLProps, ReactNode } from "react";

export interface ImageProps extends HTMLProps<HTMLImageElement> {
    imgUrl: string;
}

