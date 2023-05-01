import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IModal } from "@/shared";

export interface TypeModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: IModal;
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}
