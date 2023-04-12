import cn from "classnames";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";

import styles from "./TopProductItem.module.css";
import { TopProductItemProps } from "./TopProductItem.props";

import { addToCart } from "@/store/cart/actions";
import { getPrettyPrice, getPrice, PRODUCT_ROUTE } from "@/utils";
import { Button, CartShoppingIcon, Discount, FontAwesomeIcon, Htag } from "@/components/UI";

export const TopProductItem = ({
    item,
    className,
    ...props
}: TopProductItemProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div {...props} className={cn(className, styles.wrapper)}>
            <Link href={`${PRODUCT_ROUTE}${item.id}`}>
                <Image
                    alt={`Изображение товара ${item.name}`}
                    height={200}
                    width={200}
                    loader={() => item.imgUrl}
                    className={styles.img}
                    src={item.imgUrl}
                />
            </Link>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Discount item={item} />
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
                className={styles.btn}
            >
                <FontAwesomeIcon icon={CartShoppingIcon} />В Корзину
            </Button>
        </div>
    );
};
