import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RangeProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
}
