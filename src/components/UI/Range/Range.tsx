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
    const [val, setVal] = React.useState<number[]>(value)

    let max = 0;

    const setMinVal = (num: number) => {
        setValue([num, value[1]]);
        setVal([num, value[1]]);
    }

    const setMaxVal = (num: number) => {
        setValue([value[0], num]);
        setVal([value[0], num]);
    }

    React.useEffect(() => {
        if (value[0] > value[1]) setValue([value[1], value[0]])
    }, [value[0], value[1]])

    React.useEffect(() => {
        const max = value[1];
    }, [])

    return (
        <div className={props.className}>
            <div className={styles.inputs}>
                <Input onChange={(minVal: React.ChangeEvent<HTMLInputElement>) => setMinVal(+minVal.target.value)} value={value[0]} type="number" />
                <p className={styles.separator}>
                    —
                </p>
                <Input onChange={(maxVal: React.ChangeEvent<HTMLInputElement>) => setMaxVal(+maxVal.target.value)} value={value[1]} type="number" />
            </div>
            <RangeSlider
                onAfterChange={(v: any) => setValue(v) }
                step={500}
                max={200000}
                className={styles.range}
                range
                allowCross={false}
                onChange={(v: any) => setVal(v)}
                value={val}
            />
        </div>
    );
};
