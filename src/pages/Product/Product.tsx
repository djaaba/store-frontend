import cn from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";

import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";

import {
    Atag,
    Breadcrumbs,
    Button,
    FavoriteLabel,
    Htag,
    Ptag,
    WhiteWrapper,
} from "../../components/UI";
import { getPrettyPrice, getPrice } from "../../utils";
import { addToCart } from "../../store/cart/actions";
import { selectCart } from "../../store/cart/selector";
import { Characteristics } from "../../components/modules";

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Товар",
        href: "/",
        active: true,
    },
];

export const Product = ({ className, ...props }: ProductProps): JSX.Element => {
    const dispatch = useDispatch();

    const products = useSelector(selectCart);
    const product = products[0];

    const slice = product.characteristics.slice(0, 5);

    const {
        imgUrl,
        name,
        description,
        count,
        discount,
        id,
        isFavorite,
        isSelected,
        price,
        characteristics,
    } = product;

    const curPrice = getPrice(price, discount);

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <div className={styles.content}>
                    <img src={imgUrl} className={styles.img} />
                    <div>
                        <Htag tag="h1">{name}</Htag>
                        <FavoriteLabel product={product} icon />
                        <div className={styles.wrapper}>
                            <WhiteWrapper className={styles.mobileMenu}>
                                <div className={styles.price}>
                                    <Htag tag="h2" className={styles.curPrice}>
                                        {getPrettyPrice(curPrice)}&nbsp;
                                    </Htag>
                                    <p className={styles.prevPrice}>
                                        {getPrettyPrice(price)} &nbsp;
                                    </p>
                                </div>
                                <Button
                                    onClick={() => dispatch(addToCart(product))}
                                    color="red"
                                    size="big"
                                >
                                    В корзину
                                </Button>
                            </WhiteWrapper>
                            <WhiteWrapper
                                className={cn(styles.discount, styles.mobile)}
                            >
                                <img
                                    className={styles.svg}
                                    src="/assets/product/discount.svg"
                                />
                                <div>
                                    <p className={styles.p}>
                                        Цена&nbsp;на&nbsp;товар&nbsp;снижена
                                        на&nbsp;
                                    </p>
                                    <div className={styles.count}>
                                        <CountUp
                                            separator=" "
                                            useEasing
                                            start={price}
                                            end={curPrice}
                                        />
                                        &nbsp;₽
                                    </div>
                                    <p className={styles.p}>Успейте купить</p>
                                </div>
                            </WhiteWrapper>
                        </div>
                        <Characteristics
                            className={styles.characteristics}
                            characteristics={slice}
                        />
                        <Atag
                            aria-label="Узнать подробнее обо всех характеристиках"
                            className={styles.mobile}
                            href="#characteristics"
                        >
                            Все характеристики
                        </Atag>
                    </div>
                </div>
                <div className={styles.description}>
                    <Htag id="characteristics" tag="h1">
                        О товаре
                    </Htag>
                    <Ptag>{description}</Ptag>
                </div>
                <div className={styles.description}>
                    <Htag tag="h1">Характеристики</Htag>
                    <Characteristics characteristics={characteristics} />
                </div>
            </main>
        </React.Fragment>
    );
};
