import cn from "classnames";

import styles from "./Select.module.css";
import { SelectProps } from "./Select.props";

import { getId } from "@/utils";

export const Select = ({
    value,
    onChange,
    items,
    ...props
}: SelectProps): JSX.Element => {
    return (
        <select
            {...props}
            className={cn(styles.select, props.className)}
            onChange={onChange}
            value={value}
        >
            {
                items.map((item: any) => (
                    <option key={getId()}>{item.name}</option>
                ))
            }
        </select>
    );
};
