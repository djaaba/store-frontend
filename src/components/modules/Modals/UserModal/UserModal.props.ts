import { IUser } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IUser;
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}
