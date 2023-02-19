import { CardProps } from "./Card.props";
import styles from './Card.module.css';

export const Card = ({title, itemId}: CardProps): JSX.Element => {

    return (
        <div
            role="button"
            tabIndex={0}
            className={styles.card}
        >
            <div className={styles.content}>{title}</div>
        </div>  
    )
}