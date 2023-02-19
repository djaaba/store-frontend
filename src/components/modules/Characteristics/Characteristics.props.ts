import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ICharacteristic } from "../../../shared";

export interface CharacteristicsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    characteristics: ICharacteristic[];
}
