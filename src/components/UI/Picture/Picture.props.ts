import { HTMLProps, ReactNode } from "react";

export interface PictureProps extends HTMLProps<HTMLImageElement> {
    imgUrl: string;
    alt: string;
    width?: number;
    height?: number;
}

