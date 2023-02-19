import cn from 'classnames';

import styles from './SmoothText.module.css';
import { SmoothTextProps } from './SmoothText.props';

export const SmoothText = ({children, className, color, ...props} : SmoothTextProps) : JSX.Element => {

	return (
		<div className={cn(styles.smooth, className, {
			[styles.white]: color === 'white',
			[styles.gray]: color === 'gray',
		})}
		{...props}
		>
			{children}
		</div>
	)
};