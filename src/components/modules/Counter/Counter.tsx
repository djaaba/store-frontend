import React from "react";
import cn from "classnames";
import CountUp from "react-countup";

import styles from "./Counter.module.css";
import { CounterProps } from "./Counter.props";


export const Counter = ({
    price,
    curPrice,
    ...props
}: CounterProps): JSX.Element => {

    return (
        <div className={cn(styles.discount, styles.mobile)}>
            <img
                className={styles.svg}
                src="/assets/product/discount.svg"
            />
            <div>
                <p className={styles.p}>
                    Цена&nbsp;на&nbsp;товар&nbsp;снижена
                    на&nbsp;
                    <strong>
                        <CountUp
                            separator=" "
                            useEasing
                            start={0}
                            end={price - curPrice}
                        />
                        &nbsp;₽
                    </strong>
                </p>
                <p className={styles.p}>Успейте купить</p>
            </div>
        </div>
    );
};
