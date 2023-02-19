import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IBanner } from "../../../shared/IBanner";

export interface BannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    banners: IBanner[];
}
