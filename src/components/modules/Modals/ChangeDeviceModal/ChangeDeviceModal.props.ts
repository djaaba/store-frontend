import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBrand, IType, IDevice } from "@/shared";

export interface ChangeDeviceModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: IType[];
    brands: IBrand[];
    data: IDevice;
    setDevice: React.Dispatch<React.SetStateAction<IDevice>>;
}
