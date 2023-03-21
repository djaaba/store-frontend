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
    const [val, setVal] = React.useState<number[]>([0, 70000])

    return (
        <>
            <div className={styles.inputs}>
                <Input onChange={(minVal: number) => setValue([+minVal, val[1]])} value={val[0]} type="number" />
                {/* <Input onChange={(minVal: number) => setValue([+minVal, value[1]])} value={value[0]} type="number" /> */}
                <p className={styles.separator}>
                    —
                </p>
                {/* <Input onChange={(maxVal: number) => setValue([value[0], +maxVal])} value={value[1]} type="number" /> */}
                <Input onChange={(maxVal: number) => setValue([val[0], +maxVal])} value={val[1]} type="number" />
            </div>
            {/* <RangeSlider step={500} max={100000} className={styles.range} range allowCross={false} onChange={(v: any) => setVal(v)} value={value} /> */}
            <RangeSlider onAfterChange={(v: any) => {setValue(v)}}step={500} max={100000} className={styles.range} range allowCross={false} onChange={(v: any) => setVal(v)} value={val} />
        </>
    );
};
