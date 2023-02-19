import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

import { getId, cutArray } from "../../../utils";
import { Image, Htag } from "../../UI/index";
import { IBrand } from "../../../shared";
import { Scroll } from "../Scroll/Scroll";

export const Brands = ({ brands, ...props }: BrandsProps): JSX.Element => {
    const items = cutArray(brands)

    return (
        <section {...props} className={styles.main}>
            <Htag tag="h1">Популярные бренды</Htag>
            <Scroll>
                {
                    brands.length > 10 ?
                        items.map((column: any) => (
                            <div className={styles.container}>
                                {
                                    column.map((item: IBrand) => (
                                        <Image
                                            key={getId()}
                                            className={styles.img}
                                            alt={`Лого бренда ${item.name}`}
                                            imgUrl={item.imgUrl}
                                        />
                                    ))
                                }
                            </div>
                        ))
                        :
                        brands.map((item: IBrand) => (
                            <div key={getId()} className={styles.container}>
                                <Image
                                    className={styles.img}
                                    alt={`Лого бренда ${item.name}`}
                                    imgUrl={item.imgUrl}
                                />
                            </div>
                        ))
                }
            </Scroll>
        </section>
    );
};
