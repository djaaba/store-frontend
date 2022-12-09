import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface CounterProps extends
	Omit<DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
	'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
	children?: ReactNode;
}