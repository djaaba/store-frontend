import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DictaphoneProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setText: Function;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
