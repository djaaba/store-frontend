import React from "react";
import cn from "classnames";
import Link from "next/link";
import Range from 'rc-slider';

import styles from "./Catalog.module.css";
// import { ProductProps } from "./Product.props";

import { Breadcrumbs, Checkbox, Input } from "@/components/UI";

import 'rc-slider/assets/index.css';

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Продукты",
        href: "/",
        active: true,
    },
];

const Products = ({ ...props }: any): JSX.Element => {

    const [isChecked, setIsChecked] = React.useState(false)

    const [value, setValue] = React.useState<number[]>([25, 75]);
    const [minPrice, setMinPrice] = React.useState<number>(value[0])
    const [maxPrice, setMaxPrice] = React.useState<number>(value[1])

    React.useEffect(() => {
        // setValue(() => [minPrice, maxPrice])
        setValue((rest) => [rest[0]++, rest[1]++])
        console.log(minPrice, maxPrice)
    }, [minPrice, maxPrice])

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <aside className={styles.aside}>
                    <p>
                        <b>
                            Категория
                        </b>
                    </p>
                    <p>
                        <b>
                            Бренд
                        </b>
                    </p>
                    <p>
                        <b>
                            Цена
                        </b>
                    </p>
                    <div className={styles.sliders}>

                        <Input setValue={(e: any) => setMinPrice(e)} value={minPrice} type="number" />
                        <p className={styles.separator}>
                        {value[1]}
                            —
                        {value[0]}
                        </p>
                        <Input setValue={(e: any) => setMaxPrice(e)} value={maxPrice} type="number" />
                    </div>
                    <Checkbox checked={isChecked} />
                    <Range range allowCross={false} onChange={(val) => setValue(val)} defaultValue={value} />
                </aside>
            </main>
        </React.Fragment>
    );
};

export default Products;

export async function getServerSideProps() {

    return {
        props: {
        },
    };
}

