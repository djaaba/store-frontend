import cn from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import HyperModal from "react-hyper-modal";

import styles from "./Admin.module.css";
// import { AdminProps } from "./Admin.props";

import { BrandModal, DeviceModal, TypeModal, BannerModal, StoreModal, OrderModal } from "@/components/modules";
import { check, getAllBanners, getAllBrands, getAllOrders, getAllTypes, getOrderBySlug, getStore } from "@/api";
import { IBanner, IBrand, IModal, IOrder, IOrderInfo, IStoreInfo, IType, IUserInfo } from "@/shared";

import { login } from "@/store/user/actions";
import { Meta } from "@/components/seo/Meta";
import { Button, Htag, WhiteWrapper } from "@/components/UI";
import { getId } from "@/utils";

const initialModal: IModal = {
    id: -1,
    name: '',
    imgUrl: '',
}

enum modals {
    type = "type",
    brand = "brand",
    device = "device",
    banner = "banner",
    order = "order",
}

const Admin = ({ types, brands, info, banners, orders, className, ...props }: AdminProps): JSX.Element => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = React.useState<string>('');
    const [data, setData] = React.useState<IModal>(initialModal);
    const [devices, setDevices] = React.useState<IOrderInfo[]>([]);

    const manageModal = (flag: string, type?: IModal) => {
        type ? setData(type) : setData(initialModal);
        setOpen(flag);
    }

    React.useEffect(() => {
        getAllOrders().then(data => console.log(data))
        check().then(data => {
            dispatch(login(data as IUserInfo))
        }).catch(err => {
        })
    }, [])

    const getInfo = (order: string) => {
        getOrderBySlug(order).then(devices => setDevices(devices))
        console.log(devices)
        setOpen(modals.order)
    }

    return (
        <React.Fragment {...props}>
            <Meta title="Панель администратора" description="Панель администратора" />
            <main className={cn(styles.main, "wrapper")}>
                <WhiteWrapper>
                    <div>
                        <Htag tag="h2">Бренды</Htag>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                {
                                    brands.map(brand => (
                                        <p key={brand.id} onClick={() => manageModal(modals.brand, brand)}>
                                            {brand.name}
                                        </p>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                    <Button color="red" size="big" onClick={() => manageModal(modals.brand)}>Добавить бренд</Button>
                    <HyperModal requestClose={() => setOpen('')} isOpen={isOpen == modals.brand}>
                        <BrandModal setOpen={setOpen} brand={data} />
                    </HyperModal>
                </WhiteWrapper>
                <WhiteWrapper>
                    <div>
                        <Htag tag="h2">Типы</Htag>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                {
                                    types.map(type => (
                                        <p key={type.id} onClick={() => manageModal(modals.type, type)}>
                                            {type.name}
                                        </p>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                    <Button color="red" size="big" onClick={() => manageModal(modals.type)}>Добавить тип</Button>
                    <HyperModal requestClose={() => setOpen('')} isOpen={isOpen == modals.type}>
                        <TypeModal setOpen={setOpen} type={data} />
                    </HyperModal>
                </WhiteWrapper>
                <WhiteWrapper>
                    <Button color="red" size="big" onClick={() => manageModal(modals.device)}>Добавить устройство</Button>
                    <HyperModal requestClose={() => setOpen('')} isOpen={isOpen == modals.device}>
                        <DeviceModal setOpen={setOpen} brands={brands} types={types} />
                    </HyperModal>
                </WhiteWrapper>
                <WhiteWrapper>
                    <StoreModal storeInfo={info} />
                </WhiteWrapper>
                <WhiteWrapper>
                    <div>
                        <Htag tag="h2">Заказы</Htag>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                {
                                    orders.map(order => (
                                        <p
                                            key={getId()}
                                            onClick={() => getInfo(order.order)}
                                            className={order.status ? styles.finished : ''}
                                        >
                                            {order.order}
                                            &nbsp;—&nbsp;
                                            {order.user.name}
                                        </p>
                                    ))
                                }

                            </li>
                        </ul>
                    </div>
                    <HyperModal requestClose={() => setOpen('')} isOpen={isOpen == modals.order}>
                        <OrderModal setOpen={setOpen} devices={devices} />
                    </HyperModal>
                </WhiteWrapper>
                <WhiteWrapper>
                    <div>
                        <Htag tag="h2">Баннеры</Htag>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                {
                                    banners.map(banner => (
                                        <p key={banner.id} onClick={() => manageModal(modals.banner, banner)}>
                                            {banner.name}
                                        </p>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                    <Button color="red" size="big" onClick={() => manageModal(modals.banner)}>Добавить баннер</Button>
                    <HyperModal requestClose={() => setOpen('')} isOpen={isOpen == modals.banner}>
                        <BannerModal setOpen={setOpen} banner={data} />
                    </HyperModal>
                </WhiteWrapper>
            </main>
        </React.Fragment >
    );
};

export default Admin;

export async function getServerSideProps() {
    const types = await getAllTypes();
    const brands = await getAllBrands();
    const info = await getStore();
    const banners = await getAllBanners();
    const orders = await getAllOrders();

    return {
        props: {
            types,
            brands,
            info,
            banners,
            orders
        },
    };
}

interface AdminProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: IType[];
    brands: IBrand[];
    banners: IBanner[];
    info: IStoreInfo;
    orders: IOrder[];
}
