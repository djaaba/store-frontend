import cn from "classnames";

import styles from "./Ptag.module.css";
import { PtagProps } from "./Ptag.props";

export const Ptag = ({
    upperCase = false,
    color = "inherit",
    className,
    children,
    ...props
}: PtagProps): JSX.Element => {
    return (
        <p
            {...props}
            className={cn(styles.p, className, {
                [styles.white]: color === "white",
                [styles.gray]: color === "gray",
                [styles.black]: color === "black",
                [styles.inherit]: color === "inherit",

                [styles.upperCase]: upperCase,
            })}
        >
            {children}
        </p>
    );
};
