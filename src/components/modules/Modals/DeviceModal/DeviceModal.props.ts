import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBrand, IDevice, IType } from "@/shared";

export interface DeviceModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: IType[];
    brands: IBrand[];
    device?: IDevice;
    setDevice?: React.Dispatch<React.SetStateAction<IDevice>>;
    setOpen: React.Dispatch<React.SetStateAction<string>>;
}
