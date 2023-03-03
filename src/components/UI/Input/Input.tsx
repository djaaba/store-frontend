import cn from "classnames";
import { useState } from "react";

import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({
    placeholder,
    type,
    value,
    setValue,
    ...props
}: InputProps): JSX.Element => {
    // const [val, setVal] = useState<string|number>();

    return (
        <>
            <input
                className={cn(styles.input, props.className, )}
                type={type}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </>
    );
};
