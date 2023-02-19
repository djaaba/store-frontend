import cn from "classnames";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";

export const Image = ({
    children,
    imgUrl,
    className,
    alt,
    ...props
}: ImageProps): JSX.Element => {
    return (
        <>
            <div {...props} className={cn(styles.main, className)}>
                <picture>
                    <img alt={alt} className={styles.img} src={imgUrl} />
                </picture>
            </div>
        </>
    );
};
