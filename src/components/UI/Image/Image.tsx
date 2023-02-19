import cn from "classnames";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";

export const Image = ({
    children,
    imgUrl,
    className,
    ...props
}: ImageProps): JSX.Element => {
    return (
        <>
            <main {...props} className={cn(styles.main, className)}>
                <picture>
                    <img alt={props.alt} className={styles.img} src={imgUrl} />
                </picture>
            </main>
        </>
    );
};
