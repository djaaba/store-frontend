import { IOrderInfo } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OrderModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    devices: IOrderInfo[];
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}
