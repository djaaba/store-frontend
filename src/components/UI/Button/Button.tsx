import cn from "classnames";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
    size = "big",
    icon = false,
    title = "",
    color,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.bigButton, styles.button, className, {
                [styles.red]: color === "red",
                [styles.gray]: color === "gray",
                [styles.dark]: color === "dark",

                [styles.bigButton]: size === "big",
                [styles.mediumButton]: size === "medium",
                [styles.smallButton]: size === "small",
            })}
            title={title}
            {...props}
        >
            <div
                className={cn(styles.buttonCenter, {
                    iconWithText: icon === true,
                })}
            >
                {children}
            </div>
        </button>
    );
};
