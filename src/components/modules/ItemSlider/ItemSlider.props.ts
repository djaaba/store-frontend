import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDevice } from "@/shared";

export interface ItemSliderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IDevice[];
    title: string;
}
