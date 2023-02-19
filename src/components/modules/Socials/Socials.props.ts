import { ReactNode } from "react";
import { IApp } from "../../../shared/IApp";
import { ISocial } from "../../../shared/ISocial";

export interface SocialsProps {
    apps: IApp[];
    socials: ISocial[];
}
