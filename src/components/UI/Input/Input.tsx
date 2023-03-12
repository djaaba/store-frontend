import cn from "classnames";

import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({
    placeholder,
    value,
    onChange,
    type,
    ...props
}: InputProps): JSX.Element => {
    return (
        <input
            {...props}
            className={cn(styles.input, props.className)}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};
