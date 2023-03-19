import React from "react";
import cn from "classnames";
import { default as RangeSlider } from 'rc-slider';

import styles from "./Range.module.css";
import { RangeProps } from "./Range.props";
import 'rc-slider/assets/index.css';

import { Input } from "@/components/UI";

export const Range = ({
    value,
    setValue,
    ...props
}: RangeProps): JSX.Element => {

    return (
        <>
            <div className={styles.inputs}>
                <Input onChange={(minVal: number) => setValue([+minVal, value[1]])} value={value[0]} type="number" />
                <p className={styles.separator}>
                    —
                </p>
                <Input onChange={(maxVal: number) => setValue([value[0], +maxVal])} value={value[1]} type="number" />
            </div>
            <RangeSlider className={styles.range} range allowCross={false} onChange={(val: any) => setValue(val)} value={value} />
        </>
    );
};
