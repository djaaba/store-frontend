import { IUser } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ChangeInfoModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IUser;
}
