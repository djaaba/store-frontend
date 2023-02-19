import cn from "classnames";

import styles from "./Arrow.module.css";
import { ArrowProps } from "./Arrow.props";

export const Arrow = ({
    children,
    direction = "down",
    ...props
}: ArrowProps): JSX.Element => {
    return (
        <>
            <div
                className={cn(styles.arrow, props.className, {
                    [direction]: direction,
                })}
            >
                <i />
            </div>
        </>
    );
};

