import cn from "classnames";
import Link from "next/link";
import { useDispatch } from "react-redux";

import styles from "./TopProductItem.module.css";
import { TopProductItemProps } from "./TopProductItem.props";

import { addToCart } from "../../../store/cart/actions";
import { getPrettyPrice, getPrice } from "../../../utils";
import { Button, CartShoppingIcon, FontAwesomeIcon, Htag } from "../../UI";

export const TopProductItem = ({
    item,
    className,
    ...props
}: TopProductItemProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div {...props} className={cn(className, styles.wrapper)}>
            <Link href={`/products/${item.id}`}>
                <img
                    className={styles.img}
                    src={item.imgUrl}
                    alt="Изображение товара"
                    aria-label={`Узнать больше о ${item.description}`}
                />
            </Link>
            <div className={styles.container}>
                <div className={styles.content}>
                    {
                        item.discount ?
                            <div className={styles.discount}>
                                <p className={cn(styles.discountText, styles.count)}>
                                    Скидка
                                </p>
                                <p className={cn(styles.line, styles.count)}>
                                    -{item.discount}%
                                </p>
                            </div>
                            : ""
                    }
                    <div className={styles.price}>
                        <Htag tag="h2" className={styles.curPrice}>
                            {getPrettyPrice(getPrice(item.price, item.discount))}
                            &nbsp;
                        </Htag>
                        {
                            item.discount ?
                                <p className={styles.prevPrice}>
                                    {getPrettyPrice(item.price)}&nbsp;
                                </p>
                                : ""
                        }
                    </div>
                    <p className={styles.description}>{item.name}</p>
                </div>
            </div>
            <Button
                onClick={() => dispatch(addToCart(item))}
                size="medium"
                color={"red"}
                icon
            >
                <FontAwesomeIcon icon={CartShoppingIcon} />В Корзину
            </Button>
        </div>
    );
};
