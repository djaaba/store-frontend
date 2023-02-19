import { HeaderNavCardProps } from "./HeaderNavCard.props";
import styles from './HeaderNavCard.module.css';

export const HeaderNavCard = ({title, itemId}: HeaderNavCardProps): JSX.Element => {

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