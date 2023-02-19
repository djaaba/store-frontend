import cn from "classnames";
import { Image, Htag } from "../../UI/index";

import styles from "./Brands.module.css";
import { BrandsProps } from "./Brands.props";

export const Brands = ({ ...props }: BrandsProps): JSX.Element => {
    return (
        <>
            <main className={styles.main}>
                <Htag tag="h1">Популярные бренды</Htag>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <Image
                            alt="Лого бренда"
                            imgUrl="/assets/brands/mi.webp"
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <Image
                            alt="Лого бренда"
                            imgUrl="/assets/brands/mi.webp"
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
