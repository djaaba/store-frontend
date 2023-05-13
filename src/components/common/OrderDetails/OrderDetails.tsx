import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import styles from "./OrderDetails.module.css";
import { OrderDetailsProps } from "./OrderDetails.props";

import {
    discountCart,
    sumCountCart,
    sumPriceCart,
    selectCart
} from "@/store/cart/selector";
import { selectUser } from "@/store/user/selector";
import { getPrettyPrice, getPostfix, success, error, LOGIN_ROUTE, PROFILE_ROUTE } from "@/utils/";
import { Button, Htag, ItemWithDots } from "@/components/UI";
import { createOrder } from "@/api";
import { IDevice } from "@/shared";
import { toggleCart } from "@/store/cart/actions";

export const OrderDetails = ({ ...props }: OrderDetailsProps): JSX.Element => {
    const dispatch = useDispatch();
    const sum = useSelector(sumPriceCart);
    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);
    const discount = useSelector(discountCart);
    const sumCount = useSelector(sumCountCart);
    const router = useRouter();

    const handleClick = () => {
        const order = String(Date.parse(String(new Date())))
        if (user.isAuth) {
            if (user._user.phone && user._user.address) {
                createOrder(cart, user._user.id, order)
                toast.success('Спасибо за покупку!', success);
                cart.forEach((item: IDevice) => {
                    dispatch(toggleCart(item))
                })
            } else {
                toast.error('Укажите ваш телефон и адрес!', error);
                router.push(PROFILE_ROUTE);
            }
        } else {
            toast.error('Войдите в профиль!', error);
            router.push(LOGIN_ROUTE);

        }
        console.log()
    }

    return (
        <>
            <section className={cn(styles.section, props.className)}>
                <Htag tag="h3" className={styles.title}>
                    Детали заказа
                </Htag>
                <div className={styles.content}>
                    <ItemWithDots
                        size="h4"
                        title={`${sumCount}\xa0${getPostfix(sumCount)}`}
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
                <Button onClick={() => handleClick()} size="big" color="red">
                    Купить!
                </Button>
            </section>
        </>
    );
};
