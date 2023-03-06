import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDevice } from "../../../shared";

export interface TopProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IDevice[];
}
