import { HeaderNavCardProps } from "./HeaderNavCard.props";
import styles from "./HeaderNavCard.module.css";

import { SmoothText } from "@/components/UI";

export const HeaderNavCard = ({
    title,
    ...props
}: HeaderNavCardProps): JSX.Element => {
    return (
        <div role="button" className={styles.card}>
            <SmoothText color="gray">
                <div className={styles.content}>{title}</div>
            </SmoothText>
        </div>
    );
};
