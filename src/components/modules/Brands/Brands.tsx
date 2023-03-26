import Link from "next/link";
import { useDispatch } from "react-redux";

import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

import { cutArray, PRODUCT_ROUTE } from "@/utils";
import { Picture, Htag } from "@/components/UI";
import { IBrand } from "@/shared";
import { Scroll } from "../";
import { toggleBrand } from "@/store/filter/brands/actions";

const Brands = ({ brands, ...props }: BrandsProps): JSX.Element => {
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
                                    <Picture
                                        className={styles.img}
                                        alt={`Лого бренда ${item.name}`}
                                        imgUrl={item.imgUrl}
                                        width={90}
                                        height={25}
                                    />
                                </Link>
                            ))}
                        </div>
                    ))
                    : brands?.map((item: IBrand, i: number) => (
                        <div key={i} className={styles.content}>
                            <Link href={PRODUCT_ROUTE} onClick={() => dispatch(toggleBrand(item))}>
                                <Picture
                                    className={styles.img}
                                    alt={`Лого бренда ${item.name}`}
                                    imgUrl={item.imgUrl}
                                    width={90}
                                    height={25}
                                />
                            </Link>
                        </div>
                    ))}
            </Scroll>
        </section>
    );
};

export default Brands;