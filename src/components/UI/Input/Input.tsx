import cn from "classnames";
import { useState } from "react";

import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({
    placeholder,
    type,
    ...props
}: InputProps): JSX.Element => {
    const [text, setText] = useState<string>("");

    return (
        <>
            <input
                className={cn(styles.input, props.className)}
                type={type}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </>
    );
};
