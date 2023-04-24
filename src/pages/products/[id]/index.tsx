import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import cn from "classnames";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import styles from "./Product.module.css";

import { IBrand, IDevice, IType } from "@/shared";
import { getAllTypes, getAllBrands, getDeviceBySlug, deleteDevice } from "@/api";
import { getPrettyPrice, getPrice, MAIN_ROUTE, success } from "@/utils";
import { Atag, Breadcrumbs, Button, FavoriteLabel, FontAwesomeIcon, Htag, Ptag, TrashIcon, WhiteWrapper } from "@/components/UI";
import { addToCart } from "@/store/cart/actions";
import { ChangeDeviceModal, Characteristics, Counter } from "@/components/modules";
import { Meta } from "@/components/seo/Meta";
import { selectUser } from "@/store/user/selector";



const Item = ({ data, brands, types, ...props }: CatalogProps) => {
    const [device, setDevice] = React.useState<IDevice>(data);
    const userInfo = useSelector(selectUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const curPrice = getPrice(device.price, device.discount);

    const handleClick = (id: number) => {
        // console.log(id)
        deleteDevice(id).then(() => {
            toast.success('Вы удалили товар!', success);
            router.push(MAIN_ROUTE)
        })
    }

    const breadcrumbs = [
        { id: 1, name: "Главная", href: "/", active: false },
        {
            id: 2,
            href: "/",
            name: types.filter(type => type.id == device.typeId)[0].name,
            active: false,
        },
        {
            id: 3,
            href: "/",
            name: brands.filter(brand => brand.id == device.brandId)[0].name,
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
                    <div className={styles.container}>
                        <img src={device.imgUrl} className={styles.img} />
                        {
                            userInfo._user?.role === "ADMIN" ?
                                <div className={styles.btnGroup}>
                                    <Button onClick={() => handleClick(data.id)} className={props.className} size="big" color="red">
                                        <FontAwesomeIcon icon={TrashIcon} />
                                    </Button>
                                    <ChangeDeviceModal
                                        setDevice={setDevice}
                                        types={types}
                                        brands={brands}
                                        data={device}
                                        className={styles.btn}
                                    />
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div>
                        <Htag tag="h1">{device.name}</Htag>
                        <FavoriteLabel product={device} icon />
                        <div className={styles.wrapper}>
                            <WhiteWrapper className={styles.mobileMenu}>
                                <div className={styles.price}>
                                    <Htag tag="h2" className={styles.curPrice}>
                                        {getPrettyPrice(curPrice)}&nbsp;
                                    </Htag>
                                    {
                                        device.discount > 0 ?
                                            <p className={styles.prevPrice}>
                                                {getPrettyPrice(device.price)} &nbsp;
                                            </p>
                                            :
                                            ''
                                    }
                                </div>
                                <Button
                                    onClick={() => dispatch(addToCart(device))}
                                    color="red"
                                    size="big"
                                >
                                    В корзину
                                </Button>
                            </WhiteWrapper>
                            {
                                device.discount > 0 ?
                                    <WhiteWrapper className={styles.mobile}>
                                        <Counter price={device.price} curPrice={curPrice} />
                                    </WhiteWrapper>
                                    :
                                    ''
                            }
                        </div>
                        <Characteristics
                            className={styles.characteristics}
                            characteristics={device.info}
                        />
                        <Atag
                            aria-label="Узнать подробнее обо всех характеристиках"
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
    const data = await getDeviceBySlug(String(id));
    const types = await getAllTypes();
    const brands = await getAllBrands();

    return {
        props: {
            data,
            types,
            brands
        },
    };
}

interface CatalogProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IDevice;
    brands: IBrand[];
    types: IType[];
}