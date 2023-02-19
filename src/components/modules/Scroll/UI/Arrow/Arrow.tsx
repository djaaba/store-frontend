import { ArrowProps } from "./Arrow.props";
import styles from './Arrow.module.css'

export const Arrow = ({ children, disabled, onClick, }: ArrowProps): JSX.Element => {

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={styles.arrow}
            style={{ opacity: disabled ? 0 : 1 }}
        >
            {children}
        </button>
    )
}