import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

import { getId } from "../../../utils";
import { Image, Htag } from "../../UI/index";
import { IBrand } from "../../../shared";

const cutArray = (brands: IBrand[]) => {
    let i: number = 0;
    const newArr: any = [];

    do {
        newArr.push(brands.slice(i, i + 2))
        i += 2;
    } while (i < brands.length)
    return newArr;
}

export const Brands = ({ brands, ...props }: BrandsProps): JSX.Element => {
    const items = cutArray(brands)

    return (
        <section {...props} className={styles.main}>
            <Htag tag="h1">Популярные бренды</Htag>
            {/* <div className={styles.content}> */}
                {


                    brands.slice(0, 2).map((item) => (
                        <div key={getId()} className={styles.wrapper}>
                            <Image
                                className={styles.img}
                                alt={`Лого бренда ${item.name}`}
                                imgUrl={item.imgUrl}
                            />
                        </div>
                    ))
                }
            {/* </div> */}
        </section>
    );
};
