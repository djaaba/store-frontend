import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IApp } from "../../../shared/IApp";
import { ISocial } from "../../../shared/ISocial";

export interface SocialsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    apps: IApp[];
    socials: ISocial[];
}
