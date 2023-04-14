import { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
import React from 'react'
import cn from "classnames";

import styles from "./Product.module.css";

import { IBrand, IDevice, IType } from "@/shared";
import { getBrandBySlug, getTypeBySlug, getDeviceBySlug } from "@/api";
import { getPrettyPrice, getPrice } from "@/utils";
import { Atag, Breadcrumbs, Button, FavoriteLabel, Htag, Ptag, WhiteWrapper } from "@/components/UI";
import { addToCart } from "@/store/cart/actions";
import { Characteristics, Counter } from "@/components/modules";
import { Meta } from "@/components/seo/Meta";

const Item = ({ device, brand, type, ...props }: CatalogProps) => {
    const dispatch = useDispatch();
    const curPrice = getPrice(device.price, device.discount);

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

    return (
        <React.Fragment {...props}>
            <Meta title={device.name} description={`Описание ${device.name}`} />
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <div className={styles.content}>
                    <img src={device.imgUrl} className={styles.img} />
                    <div>
                        <Htag tag="h1">{device.name}</Htag>
                        <FavoriteLabel product={device} icon />
                        <div className={styles.wrapper}>
                            <WhiteWrapper className={styles.mobileMenu}>
                                <div className={styles.price}>
                                    <Htag tag="h2" className={styles.curPrice}>
                                        {getPrettyPrice(curPrice)}&nbsp;
                                    </Htag>
                                    <p className={styles.prevPrice}>
                                        {getPrettyPrice(device.price)} &nbsp;
                                    </p>
                                </div>
                                <Button
                                    onClick={() => dispatch(addToCart(device))}
                                    color="red"
                                    size="big"
                                >
                                    В корзину
                                </Button>
                            </WhiteWrapper>
                            <WhiteWrapper>
                                <Counter price={device.price} curPrice={curPrice} />
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
                    <Ptag>{device.description}</Ptag>
                </div>
                <div className={styles.description}>
                    <Htag tag="h1">Характеристики</Htag>
                    <Characteristics characteristics={device.info} />
                </div>
            </main>
        </React.Fragment>
    );
}

export default Item;

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

interface CatalogProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    device: IDevice;
    brand: IBrand;
    type: IType;
}