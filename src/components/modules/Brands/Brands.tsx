import Link from "next/link";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

import { cutArray, PRODUCT_ROUTE } from "@/utils";
import { Picture, Htag } from "@/components/UI";
import { IBrand } from "@/shared";
import { Scroll } from "../";
import { toggleBrand } from "@/store/filter/brands/actions";

export const Brands = ({ brands, ...props }: BrandsProps): JSX.Element => {
    const items = cutArray(brands);
    const dispatch = useDispatch();

    return (
        <section {...props} className={styles.container}>
            <Htag tag="h1">Популярные бренды</Htag>
            <Scroll>
                {brands?.length > 10
                    ? items?.map((column: IBrand[], i: number) => (
                        <div key={i} className={styles.content}>
                            {column.map((item: IBrand, j: number) => (
                                <Link key={j} href={PRODUCT_ROUTE} onClick={() => dispatch(toggleBrand(item))}>
                                    <div {...props} className={cn(styles.main)}>
                                        <picture>
                                            <img
                                                className={styles.img}
                                                src={item.imgUrl}
                                                alt={`Лого бренда ${item.name}`}
                                            />
                                        </picture>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))
                    : brands?.map((item: IBrand, i: number) => (
                        <div key={i} className={styles.content}>
                            <Link href={PRODUCT_ROUTE} onClick={() => dispatch(toggleBrand(item))}>
                                <div {...props} className={cn(styles.main)}>
                                    <picture>
                                        <img
                                            className={styles.img}
                                            src={item.imgUrl}
                                            alt={`Лого бренда ${item.name}`}
                                        />
                                    </picture>
                                </div>
                            </Link>
                        </div>
                    ))}
            </Scroll>
        </section>
    );
};