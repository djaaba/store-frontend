import { DetailedHTMLProps, HTMLAttributes, HTMLProps, MouseEvent, ReactNode } from "react";

export interface ItemCounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
    items: number[];
}

