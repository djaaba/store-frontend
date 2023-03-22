import { IBrand, IDevice, IPaginationDevice, IType } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        data: IDevice[];
        types: IType[];
        brands: IBrand[];
        device: IPaginationDevice;
    }
