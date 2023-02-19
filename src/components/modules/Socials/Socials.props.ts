import { ReactNode } from "react";
import { IApp } from "../../../interfaces/IApp";
import { ISocial } from "../../../interfaces/ISocial";

export interface SocialsProps {
    apps: IApp[];
    socials: ISocial[];
}
