import { DetailedHTMLProps, HTMLAttributes, ButtonHTMLAttributes } from "react";

export interface DictaphoneProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    setText: Function;
}