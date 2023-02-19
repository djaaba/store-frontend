import cn from "classnames";
import { useDispatch } from "react-redux";

import styles from "./CartProduct.module.css";
import { CartProductProps } from "./CartProduct.props";

import {
    decrementCount,
    incrementCount,
    removeFromCart,
    toggleProduct,
} from "../../../store/cart/actions";
import { getPrettyPrice, getPrice } from "../../../utils";
import { Atag, Checkbox, FavoriteLabel, Htag } from "../../UI/index";

export const CartProduct = ({
    product,
    ...props
}: CartProductProps): JSX.Element => {
    const dispatch = useDispatch();

    const curPrice = getPrice(product.price, product.discount);

    return (
        <>
            <section {...props} className={styles.section}>
                <Checkbox
                    onChange={() => dispatch(toggleProduct(product))}
                    checked={product.isSelected}
                />
                <a aria-label="Открыть товар" href="">
                    <img className={styles.img} src={product.imgUrl} />
                </a>
                <div className={styles.container}>
                    <a aria-label="Открыть товар" href="">
                        <Htag tag="h3">{product.name}</Htag>
                    </a>
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
