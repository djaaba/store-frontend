import cn from "classnames";
import { Htag } from "../Htag/Htag";

import styles from "./ItemWithDots.module.css";
import { ItemWithDotsProps } from "./ItemWithDots.props";

export const ItemWithDots = ({
    size,
    title,
    subtitle,
    ...props
}: ItemWithDotsProps): JSX.Element => {
    switch (size) {
        case "h1":
            return (
                <div className={styles.row}>
                    <Htag tag="h1" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.width} />
                    <Htag tag="h1" className={styles.text}>
                        {subtitle}
                    </Htag>
                </div>
            );

        case "h2":
            return (
                <div className={styles.row}>
                    <Htag tag="h2" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.width} />
                    <Htag tag="h2" className={styles.text}>
                        {subtitle}
                    </Htag>
                </div>
            );

        case "h3":
            return (
                <div className={styles.row}>
                    <Htag tag="h3" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.width} />
                    <Htag tag="h3" className={styles.text}>
                        {subtitle}
                    </Htag>
                </div>
            );

        case "h4":
            return (
                <div className={styles.row}>
                    <Htag tag="h4" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.width} />
                    <Htag tag="h4" className={styles.text}>
                        {subtitle}
                    </Htag>
                </div>
            );
        case "p":
            return (
                <div className={styles.row}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.width} />
                    <p className={styles.text}>{subtitle}</p>
                </div>
            );
    }
};
