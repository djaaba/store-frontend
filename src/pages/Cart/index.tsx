import cn from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import styles from "./Cart.module.css";
import { CartProps } from "./Cart.props";

import { IDevice } from "@/shared";
import { OrderDetails } from "@/components/common/OrderDetails/OrderDetails";
import {
    Htag,
    Atag,
    Ptag,
    WhiteWrapper,
    Checkbox,
    Button,
} from "@/components/UI";
import { CartProduct } from "@/components/common/CartProduct/CartProduct";
import {
    selectCart,
    sumCountCart,
} from "@/store/cart/selector";
import { removeFromCart } from "@/store/cart/actions";
import { MAIN_ROUTE } from "@/utils";

const Cart = ({ className, ...props }: CartProps): JSX.Element => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const sumCount = useSelector(sumCountCart);

    const [selected, setSelected] = React.useState<IDevice[]>([])

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
                        <Link href={MAIN_ROUTE}>
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
                                            onChange={() => selected.length === cart.length === false ? setSelected(cart) : setSelected([])}
                                            checked={selected.length === cart.length}
                                        />
                                        <Ptag>Выбрать все</Ptag>
                                    </div>
                                    {selected.length > 0 && (
                                        <Atag
                                            aria-label="Удалить товары из избранного"
                                            onClick={() =>
                                                selected.map(product => {
                                                    dispatch(removeFromCart(product))
                                                    setSelected((prev) => prev.filter((item) => item.id !== product.id));
                                                })
                                            }
                                        >
                                            <Ptag>Удалить выбранные</Ptag>
                                        </Atag>
                                    )}
                                </WhiteWrapper>

                                {cart.map((item: IDevice) => (
                                    <WhiteWrapper key={item.id}>
                                        <CartProduct value={selected} setValue={setSelected} product={item} />
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
