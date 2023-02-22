import { HeaderNavCardProps } from "./HeaderNavCard.props";
import styles from "./HeaderNavCard.module.css";

export const HeaderNavCard = ({
    title,
    ...props
}: HeaderNavCardProps): JSX.Element => {
    return (
        <div role="button" className={styles.card}>
            <div className={styles.content}>{title}</div>
        </div>
    );
};
