import { IBrand, IDevice, IType } from "@/shared";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CatalogProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        device: IDevice;
        brand: IBrand;
        type: IType;
    }
