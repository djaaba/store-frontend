import React from "react";
import cn from "classnames";
import Link from "next/link";
import Range from 'rc-slider';

import styles from "./Catalog.module.css";
// import { ProductProps } from "./Product.props";

import { getAllTypes, getAllBrands, getAllDevices } from "../api/requests";
import { Breadcrumbs, Checkbox, Input } from "@/components/UI";

import 'rc-slider/assets/index.css';
import { getId } from "@/utils";
import { Product } from "@/components/modules";

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Продукты",
        href: "/",
        active: true,
    },
];

const Products = ({ types, brands, devices, ...props }: any): JSX.Element => {

    const [isChecked, setIsChecked] = React.useState(false)
    const [value, setValue] = React.useState<number[]>([25, 75])

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <div className={styles.content}>
                    <aside className={styles.aside}>
                        <div>
                            <p>
                                <b>
                                    Категория
                                </b>
                            </p>
                            <div className={styles.container}>
                                {
                                    types?.map((item: any) => (
                                        <div key={getId()} className={styles.filter}>
                                            <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                                            <Link
                                                href={{
                                                    pathname: '/about',
                                                    query: { name: 'test' },
                                                }}

                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.title}>
                            <b>
                                Бренд
                            </b>
                            <div className={styles.container}>
                                {
                                    brands?.map((item: any) => (
                                        <div key={getId()} className={styles.filter}>
                                            <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <p className={styles.title}>
                            <b>
                                Цена
                            </b>
                        </p>
                        <div className={styles.inputs}>
                            <Input setValue={(minVal: number) => setValue([+minVal, value[1]])} value={value[0]} type="number" />
                            <p className={styles.separator}>
                                —
                            </p>
                            <Input setValue={(maxVal: number) => setValue([value[0], +maxVal])} value={value[1]} type="number" />
                        </div>
                        <Range className={styles.range} range allowCross={false} onChange={(val: any) => setValue(val)} value={value} />
                    </aside>
                    <div className={styles.products}>
                        {
                            devices.rows.map((item: any) => (
                                <Product key={getId()} item={item} />
                            ))
                        }
                        {
                            devices.rows.map((item: any) => (
                                <Product key={getId()} item={item} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Products;

export async function getServerSideProps() {
    const types = await getAllTypes();
    const brands = await getAllBrands();
    const devices = await getAllDevices();

    return {
        props: {
            types,
            brands,
            devices
        },
    };
}

