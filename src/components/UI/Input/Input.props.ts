import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    type?: any;
    value: any;
    setValue: React.Dispatch<React.SetStateAction<any>>;
}
