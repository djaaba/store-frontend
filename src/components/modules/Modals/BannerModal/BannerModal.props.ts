import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IModal } from "@/shared";

export interface BannerModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    banner: IModal;
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}
