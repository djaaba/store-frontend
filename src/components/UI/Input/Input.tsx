import cn from "classnames";
import { useState } from "react";

import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({
    placeholder,
    value,
    setValue,
    type,
    ...props
}: InputProps): JSX.Element => {
    return (
        <input
            {...props}
            className={cn(styles.input, props.className)}
            type={type}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />
    );
};
