import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    value: any;
    onChange: React.Dispatch<React.SetStateAction<any>>;
    items: any[];
}
