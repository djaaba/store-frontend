import { useDispatch } from "react-redux";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./CartProduct.module.css";
import { CartProductProps } from "./CartProduct.props";

import {
    decrementCount,
    incrementCount,
    toggleCart,
} from "@/store/cart/actions";
import { getPrettyPrice, getPrice, searchById, PRODUCT_ROUTE } from "@/utils";
import { Atag, Checkbox, FavoriteLabel, Htag } from "@/components/UI";
import { IDevice } from "@/shared";

export const CartProduct = ({
    product,
    value,
    setValue,
    ...props
}: CartProductProps): JSX.Element => {
    const dispatch = useDispatch();
    const curPrice = getPrice(product.price, product.discount);

    const handleDelete = (product: IDevice) => {
        dispatch(toggleCart(product))
    }

    const handleChange = () => {
        setValue(prev => {
            if (searchById(product, prev)) {
                return prev.filter(item => item.id !== product.id)
            }
            else {
                return [...prev, product]
            }
        })
    }

    const handleIncrement = (product: IDevice) => {
        dispatch(incrementCount(product))
    }

    const handleDecrement = (product: IDevice) => {
        dispatch(decrementCount(product))
    }

    return (
        <>
            <section {...props} className={styles.section}>
                <Checkbox
                    onChange={() => handleChange()}
                    checked={searchById(product, value)}
                />
                <Link href={`${PRODUCT_ROUTE}${product.id}`}>
                    <Image
                        alt={product.name}
                        height={128}
                        width={128}
                        loader={() => product.imgUrl}
                        className={styles.img}
                        src={product.imgUrl}
                    />
                </Link>
                <div className={styles.container}>
                    <Htag tag="h3">{product.name}</Htag>
                    <div className={styles.description}>
                        <div className={styles.mobile}>
                            <Link href={PRODUCT_ROUTE}>
                            <Atag
                                aria-label="Узнать подробнее обо всех товарах"
                                className={styles.link}
                                arrow
                            >
                                    Все товары
                            </Atag>
                                </Link>
                            <Atag
                                aria-label="Удалить товар"
                                onClick={() => handleDelete(product)}
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
                                    onClick={() => handleDecrement(product)}
                                    className={styles.btn}
                                >
                                    &mdash;
                                </button>
                                <Htag tag="h4" className={styles.count}>
                                    {product.count}
                                </Htag>
                                <button
                                    onClick={() => handleIncrement(product)}
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
