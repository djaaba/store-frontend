import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	upperCase?: Boolean;
	color?: 'white' | 'black' | 'gray' | 'inherit';
	children: ReactNode;
}