import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "@/shared";

export interface CartProductProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IDevice;
    value: IDevice[];
    setValue: React.Dispatch<React.SetStateAction<IDevice[]>>;
}
