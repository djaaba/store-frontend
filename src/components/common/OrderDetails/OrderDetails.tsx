import cn from "classnames";
import { useSelector } from "react-redux";

import styles from "./OrderDetails.module.css";
import { OrderDetailsProps } from "./OrderDetails.props";

import { Button, Htag, ItemWithDots } from "../../UI";
import {
    countCart,
    discountCart,
    hasSelected,
    sumCountCart,
    sumPriceCart,
} from "../../../store/cart/selector";
import { getPrettyPrice, getPostfix } from "../../../utils/";

export const OrderDetails = ({ ...props }: OrderDetailsProps): JSX.Element => {
    const sum = useSelector(sumPriceCart);
    const discount = useSelector(discountCart);
    const sumCount = useSelector(sumCountCart);

    return (
        <>
            <section className={cn(styles.section, props.className)}>
                <Htag tag="h3" className={styles.title}>
                    Детали заказа
                </Htag>
                <div className={styles.content}>
                    <ItemWithDots
                        size="h4"
                        title={`${sumCount} ${getPostfix(sumCount)}`}
                        subtitle={getPrettyPrice(sum)}
                    />
                    <ItemWithDots
                        size="h4"
                        title="Скидка"
                        subtitle={getPrettyPrice(-discount)}
                    />
                    <ItemWithDots
                        size="h3"
                        title="Итого"
                        subtitle={getPrettyPrice(sum - discount)}
                    />
                </div>
                <Button size="big" color="red">
                    Купить!
                </Button>
            </section>
        </>
    );
};
