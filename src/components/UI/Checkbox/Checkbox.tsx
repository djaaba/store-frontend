import cn from "classnames";

import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.props";

export const Checkbox = ({
    children,
    className,
    checked,
    ...props
}: CheckboxProps): JSX.Element => {
    return (
        <div className={cn(styles.checkbox, styles.stylec)}>
            <input {...props} checked={checked} type="checkbox" />
        </div>
    );
};
