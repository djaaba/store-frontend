import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";

import { getPrettyPrice, getPrice, PRODUCT_ROUTE, searchById } from "@/utils";
import {
    Button,
    FontAwesomeIcon,
    CartShoppingIcon,
    RegularHeartIcon,
    SignalIcon,
    SolidHeartIcon,
} from "@/components/UI";
import { selectFavorite } from "@/store/favorite/selector";
import { toggleFavorite } from "@/store/favorite/actions";
import { addToCart } from "@/store/cart/actions";
import { IDevice } from "@/shared";

export const Product = ({ item, ...props }: ProductProps): JSX.Element => {
    const favorites = useSelector(selectFavorite);

    const discountPrice = getPrice(item.price, item.discount);
    const dispatch = useDispatch();

    const toggle = (item: IDevice) => {
        dispatch(toggleFavorite(item));
    };

    const add = (item: IDevice) => {
        dispatch(addToCart(item));
    };

    return (
        <>
            <main className={styles.main}>
                <div>
                    <div className={styles.container}>
                        <Link href={`${PRODUCT_ROUTE}${item.id}`}>
                            <Image
                                alt={item.name}
                                height={200}
                                width={200}
                                loader={() => item.imgUrl}
                                className={styles.img}
                                src={item.imgUrl}
                            />
                        </Link>
                        <span className={styles.shadow}>
                            {
                                item.discount ?
                                    <div className={styles.discount}>
                                        <p className={styles.discountText}>
                                            -{item.discount}%
                                        </p>
                                    </div>
                                    : ""
                            }
                        </span>
                    </div>
                    <p className={cn(styles.p, styles.title)}>{item.name}</p>
                </div>
                <div>
                    {/* <p className={styles.rating}>4,4</p> */}
                    <div className={styles.prices}>
                        <p className={styles.curPrice}>
                            {getPrettyPrice(discountPrice)}
                        </p>
                        {
                            item.discount ?
                                <p className={styles.prevPrice}>
                                    {getPrettyPrice(item.price)}
                                </p>
                                : ""
                        }
                    </div>
                    <div className={styles.btnGroup}>
                        <Button
                            color="red"
                            size="medium"
                            onClick={() => add(item)}
                        >
                            <FontAwesomeIcon icon={CartShoppingIcon} />
                        </Button>
                        <FontAwesomeIcon
                            onClick={() => toggle(item)}
                            className={styles.iconBtn}
                            icon={
                                searchById(item, favorites)
                                    ? SolidHeartIcon
                                    : RegularHeartIcon
                            }
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
