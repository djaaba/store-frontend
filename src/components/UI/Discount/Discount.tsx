import cn from "classnames";

import styles from "./Discount.module.css";
import { DiscountProps } from "./Discount.props";

export const Discount = ({
    className,
    item,
    ...props
}: DiscountProps): JSX.Element => {
    return (
        <>
            {
                item.discount ?
                    <div className={cn(styles.discount, className)}>
                        <p className={cn(styles.discountText, styles.count)}>
                            Скидка
                        </p>
                        <p className={cn(styles.line, styles.count)}>
                            -{item.discount}%
                        </p>
                    </div>
                    : ""
            }
        </>
    );
};
