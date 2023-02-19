import cn from "classnames";

import styles from "./Categories.module.css";
import { Htag, Image } from "../../UI/index";

import { CategoriesProps } from "./Categories.props";

export const Categories = ({ ...props }: CategoriesProps): JSX.Element => {
    return (
        <>
            <main className={styles.main}>
                <Htag tag="h1">Популярные категории</Htag>
                <div className={styles.wrapper}>
                    <Image
                        className={styles.img}
                        alt="Картинка категории"
                        imgUrl="/assets/categories/phone.webp"
                    />
                    <p className={styles.p}>Смартфоны</p>
                </div>
            </main>
        </>
    );
};
