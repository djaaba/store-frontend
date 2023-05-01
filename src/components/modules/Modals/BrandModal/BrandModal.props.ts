import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IModal } from "@/shared";

export interface BrandModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setOpen: React.Dispatch<React.SetStateAction<string>>;
    brand: IModal;
}
