import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ICharacteristic } from "../../../interfaces";

export interface CharacteristicsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    characteristics: ICharacteristic[];
}
