import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder?: string;
    type: 'text' | 'number';
    value: number;
    setValue: any;
}
