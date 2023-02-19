import cn from "classnames";

import styles from "./WhiteWrapper.module.css";
import { WhiteWrapperProps } from "./WhiteWrapper.props";

export const WhiteWrapper = ({
    children,
    className,
    ...props
}: WhiteWrapperProps): JSX.Element => {
    return (
        <>
            <div {...props} className={cn(styles.main, className)}>
                {children}
            </div>
        </>
    );
};
