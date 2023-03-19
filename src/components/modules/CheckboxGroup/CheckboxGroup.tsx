import React from 'react';
import { Checkbox } from "@/components/UI";
import { getId } from "@/utils";
import cn from "classnames";

import styles from "./CheckboxGroup.module.css";
import { CheckboxGroupProps } from "./CheckboxGroup.props";

export const CheckboxGroup = ({
    items,
    ...props
}: CheckboxGroupProps): JSX.Element => {
    const [isChecked, setIsChecked] = React.useState(false)

    return (
        <>
            <div
                {...props}
                className={cn(styles.container, props.className)}
            >
                {
                    items?.map((item: any) => (
                        <div key={getId()} className={styles.filter}>
                            <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
