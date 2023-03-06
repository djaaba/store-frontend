import { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
import CountUp from "react-countup";
import React from 'react'
import cn from "classnames";

import { IDevice } from "@/shared";
import { getBrandBySlug, getTypeBySlug, getDeviceBySlug } from "../../api/requests";
import { getPrettyPrice, getPrice } from "@/utils";
import { Atag, Breadcrumbs, Button, FavoriteLabel, Htag, Ptag, WhiteWrapper } from "@/components/UI";

import styles from "./Product.module.css";
import { addToCart } from "@/store/cart/actions";

const Item = ({ data, brand, type, ...props }: any) => {
    const dispatch = useDispatch();
    console.log(data);
    const product = data
    // const slice = product.characteristics.slice(0, 5);

    // Остановился на роутах для продуктов
    const breadcrumbs = [
        { id: 1, name: "Главная", href: "/", active: false },
        {
            id: 2,
            href: "/",
            name: type.name,
            active: false,
        },
        {
            id: 3,
            href: "/",
            name: brand.name,
            active: false,
        },
        {
            id: 4,
            href: "/",
            name: data.name,
            active: true,
        },
    ];

    const {
        imgUrl,
        name,
        description,
        count,
        discount,
        id,
        price,
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
                        {/* <Characteristics
                            className={styles.characteristics}
                            characteristics={slice}
                        /> */}
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
                    {/* <Characteristics characteristics={characteristics} /> */}
                </div>
            </main>
        </React.Fragment>
    );
}

export default Item;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params!.id;
    const data = await getDeviceBySlug(id);
    const brand = await getBrandBySlug(data.brandId);
    const type = await getTypeBySlug(data.typeId);

    return {
        props: {
            data,
            brand,
            type
        },
    };
}