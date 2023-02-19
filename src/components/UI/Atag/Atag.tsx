import cn from "classnames";

import styles from "./Atag.module.css";
import { AtagProps } from "./Atag.props";

import { Arrow } from "../";

export const Atag = ({
    arrow,
    children,
    className,
    href,
    name,
    ...props
}: AtagProps): JSX.Element => {
    return (
        <>
            <div {...props} className={cn(className, styles.content)}>
                <a
                    id={name}
                    href={href}
                    aria-label={props["aria-label"]}
                    className={styles.a}
                >
                    {children}
                </a>
                {arrow && (
                    <Arrow
                        className={styles.i}
                        direction={"right"}
                        color="blue"
                    />
                )}
            </div>
        </>
    );
};

// мб переписать htag atag ptag
