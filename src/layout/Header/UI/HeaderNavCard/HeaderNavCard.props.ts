import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderNavCardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        title: string,
        itemId: number
}
