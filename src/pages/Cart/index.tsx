import cn from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import styles from "./Cart.module.css";
import { CartProps } from "./Cart.props";

import { IDevice } from "../../shared";
import { OrderDetails } from "../../components/common/OrderDetails/OrderDetails";
import {
    Htag,
    Atag,
    Ptag,
    WhiteWrapper,
    Checkbox,
    Button,
} from "../../components/UI";
import { removeSelected, selectAll } from "../../store/cart/actions";
import { CartProduct } from "../../components/common/CartProduct/CartProduct";
import {
    hasSelected,
    selectCart,
    sumCountCart,
} from "../../store/cart/selector";

const Cart = ({ className, ...props }: CartProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const cart = useSelector(selectCart);
    const sumCount = useSelector(sumCountCart);
    const checked = useSelector(hasSelected);

    const dispatch = useDispatch();

    return (
        <>
            <main {...props} className={cn(styles.main, "wrapper")}>
                {!cart.length ? (
                    <>
                        <Htag tag="h1">Корзина пуста</Htag>
                        <p>
                            Акции и обзоры на главной странице
                            <br /> помогут вам найти подходящие товары
                        </p>
                        <Link href="/">
                            <Button
                                className={styles.btn}
                                size="big"
                                color="red"
                            >
                                На главную
                            </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <div className={styles.title}>
                            <Htag tag="h1">Корзина</Htag>
                            <p className={styles.count}>{sumCount}</p>
                        </div>
                        <div className={styles.mainContainer}>
                            <div className={styles.content}>
                                <WhiteWrapper className={styles.wrapper}>
                                    <div className={styles.container}>
                                        <Checkbox
                                            onChange={() => {
                                                dispatch(selectAll(!isChecked));
                                                setIsChecked(!isChecked);
                                            }}
                                            checked={isChecked}
                                        />
                                        <Ptag>Выбрать все</Ptag>
                                    </div>
                                    {checked !== -1 && (
                                        <Atag
                                            aria-label="Удалить товары из избранного"
                                            onClick={() =>
                                                dispatch(removeSelected())
                                            }
                                        >
                                            <Ptag>Удалить выбранные</Ptag>
                                        </Atag>
                                    )}
                                </WhiteWrapper>

                                {cart.map((item: IDevice) => (
                                    <WhiteWrapper key={item.id}>
                                        <CartProduct product={item} />
                                    </WhiteWrapper>
                                ))}
                            </div>
                            <WhiteWrapper className={styles.details}>
                                <OrderDetails />
                            </WhiteWrapper>
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default Cart;
