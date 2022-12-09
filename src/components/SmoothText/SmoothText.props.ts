import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SmoothTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	color: 'white' | 'gray';
}