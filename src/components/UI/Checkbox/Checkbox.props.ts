import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CheckboxProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLInputElement
    > {
    checked: boolean;
}
