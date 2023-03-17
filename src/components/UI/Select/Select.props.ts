import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    value: any;
    onChange: any;
    items: any;
}
