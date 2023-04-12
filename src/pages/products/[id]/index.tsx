import { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
import CountUp from "react-countup";
import React from 'react'
import cn from "classnames";

import styles from "./Product.module.css";
// import { CatalogProps } from "./Catalog.props";

import { IBrand, IDevice, IType } from "@/shared";
import { getBrandBySlug, getTypeBySlug, getDeviceBySlug, getAllDevices } from "@/api";
import { getPrettyPrice, getPrice } from "@/utils";
import { Atag, Breadcrumbs, Button, FavoriteLabel, Htag, Ptag, WhiteWrapper } from "@/components/UI";
import { addToCart } from "@/store/cart/actions";
import { Characteristics } from "@/components/modules";

const Item = ({ device, brand, type, ...props }: CatalogProps) => {
    const dispatch = useDispatch();
    const product = device;

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
            name: device.name,
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
                        <Characteristics
                            className={styles.characteristics}
                            characteristics={device.info}
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
                    <Characteristics characteristics={device.info} />
                </div>
            </main>
        </React.Fragment>
    );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params!.id;
    const device = await getDeviceBySlug(String(id));
    const brand = await getBrandBySlug(device.brandId);
    const type = await getTypeBySlug(device.typeId);

    return {
        props: {
            device,
            brand,
            type
        },
    };
}

export default Item;

interface CatalogProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    device: IDevice;
    brand: IBrand;
    type: IType;
}