import { useDispatch } from "react-redux";
import React from "react";
import Link from "next/link";

import styles from "./CartProduct.module.css";
import { CartProductProps } from "./CartProduct.props";

import {
    decrementCount,
    incrementCount,
    removeFromCart,
} from "@/store/cart/actions";
import { getPrettyPrice, getPrice, searchById, PRODUCT_ROUTE } from "@/utils";
import { Atag, Checkbox, FavoriteLabel, Htag } from "@/components/UI";

export const CartProduct = ({
    product,
    value,
    setValue,
    ...props
}: CartProductProps): JSX.Element => {
    const dispatch = useDispatch();
    const curPrice = getPrice(product.price, product.discount);

    return (
        <>
            <section {...props} className={styles.section}>
                <Checkbox
                    onChange={() => setValue(prev => {
                        if (searchById(product, prev)) {
                            return prev.filter(item => item.id !== product.id)
                        }
                        else {
                            return [...prev, product]
                        }
                    })}
                    checked={searchById(product, value)}
                />
                <Link href={`${PRODUCT_ROUTE}${product.id}`}>
                    <img className={styles.img} src={product.imgUrl} />
                </Link>
                <div className={styles.container}>
                    <Htag tag="h3">{product.name}</Htag>
                    <div className={styles.description}>
                        <div className={styles.mobile}>
                            <Atag
                                aria-label="Узнать подробнее обо всех товарах"
                                className={styles.link}
                                arrow
                            >
                                Все товары
                            </Atag>
                            <Atag
                                aria-label="Удалить товар"
                                onClick={() =>
                                    dispatch(removeFromCart(product))
                                }
                                className={styles.link}
                            >
                                Удалить
                            </Atag>
                            <FavoriteLabel
                                className={styles.link}
                                product={product}
                            />
                        </div>
                        <div className={styles.calculation}>
                            <div className={styles.wrapper}>
                                <button
                                    onClick={() =>
                                        dispatch(decrementCount(product))
                                    }
                                    className={styles.btn}
                                >
                                    &mdash;
                                </button>
                                <Htag tag="h4" className={styles.count}>
                                    {product.count}
                                </Htag>
                                <button
                                    onClick={() =>
                                        dispatch(incrementCount(product))
                                    }
                                    className={styles.btn}
                                >
                                    &#43;
                                </button>
                            </div>
                            <div className={styles.price}>
                                <Htag tag="h2" className={styles.curPrice}>
                                    {getPrettyPrice(curPrice * product.count)}
                                    &nbsp;
                                </Htag>
                                <p className={styles.prevPrice}>
                                    {getPrettyPrice(
                                        product.price * product.count
                                    )}
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
